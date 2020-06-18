import React, { Component } from 'react'
import './index.css';
import Loading from './Loading'
import ListKandidat from './ListKandidat'
import Axios from 'axios';
import { URL_API, BASE_URL } from '../../utils/api'
import Aos from 'aos'
import Swal from 'sweetalert2'

export default class index extends Component {


    constructor(props) {
        super(props)
        this.state = {
            token: localStorage.getItem('token'),
            kandidat: [],
            isLoading: true
        }
    }

    _cekLogin = () => {
        const token = this.state.token;

        if (token === '' || token === null) {
            this.props.history.push('/')
        }
    }

    _getKandidat = async () => {
        try {
            const response = await Axios.get(URL_API + 'kandidat')
            this.setState({
                kandidat: response.data.results,
                isLoading: false
            })
        } catch (error) {

        }
    }

    componentDidMount() {
        this._cekLogin()
        this._getKandidat()
        Aos.init({
            once: true,
            easing: 'slide',
        });
    }

    _confirmPilihan = (kandidat_id, name) => {
        Swal.fire({
            title: 'Yakin Memilih ' + name,
            text: "Suara yang anda pilih dijamin kerahasiaannya !",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Pilih ' + name + ' !',
            cancelButtonText: 'Batalkan !',
        }).then((result) => {
            if (result.value) {
                this._postPilihan(kandidat_id)
            }
        })
    }

    _postPilihan = async (kandidat_id) => {
        try {

            const data = {
                'token': localStorage.getItem('token'),
                'kandidat_id': kandidat_id
            }
            const response = await Axios.post(URL_API + 'voting', data)
            if (response.data.status == 'success') {
                localStorage.removeItem('token')
                this.props.history.go('/')
            }
        } catch (error) {

        }
    }

    _showVisiMisi = (name, avatar, visi, misi) => {
        return (
            Swal.fire({
                title: name,
                html:
                    visi + misi,
                imageUrl: BASE_URL + '/storage/' + avatar,
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        )
    }

    render() {
        const state = this.state;
        return (
            <div>
                <div className="container text-center mt-4">
                    <h3 className="title" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="50">Daftar Kandidat Evoting</h3>
                    <div className="row mt-4">
                        {
                            state.isLoading
                                ?
                                <>
                                    <Loading />
                                    <Loading />
                                    <Loading />
                                    <Loading />
                                </>
                                :
                                state.kandidat.map((item, i) => (
                                    <ListKandidat
                                        name={item.name}
                                        avatar={item.avatar}
                                        onClick={() => this._confirmPilihan(item.id, item.name)}
                                        onClickVisi={() => this._showVisiMisi(item.name, item.avatar, item.visi, item.misi)} />
                                ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}
