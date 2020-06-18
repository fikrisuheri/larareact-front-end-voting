import React, { Component } from 'react'
import { imgVote } from '../../asset';
import Aos from 'aos';
import './index.css';
import { URL_API } from '../../utils/api';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class HeaderComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                token: ''
            },
            messageErr: '',
            redirect: '/voting'
        }
    }

    _handleFormChange = (event) => {
        let formData = { ...this.state.form }
        formData[event.target.name] = event.target.value;
        this.setState({
            form: formData
        })
    }

    _handleFormSubmit = () => {
        const state = this.state;
        if (state.form.token == '') {
            this.setState({
                messageErr: 'Harap masukan token'
            })
        } else {
            this._authLogin();
        }
    }

    _authLogin = async () => {
        try {
            const response = await axios.post(URL_API + 'login', this.state.form);
            const data = response.data;
            if (data.status == 'success') {
                console.log(data)
                    localStorage.setItem('token',data.results.token);
                   this.props.history.push('/voting')
            } else {
                this.setState({
                    messageErr: data.message
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        console.log(this.props);
        Aos.init({
            once: true,
            easing: 'slide',
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="50">
                    <div className="col-md-6 pt-5 mt-2" >
                        <span className="title" >
                            evoting app
                        </span>
                        <br />
                        <span className="subtitle mt-1 mb-2">
                            Selamat datang di aplikasi evoting silahkan login untuk memilih
                        </span>
                        <div className="row mt-3">
                            <div className="col">
                                <input type="text" name="token" onChange={this._handleFormChange} id="" className="form-control" placeholder="Masukan token disini" value={this.state.form.token} />
                                <small className="text-danger">{this.state.messageErr}</small>
                            </div>
                            <div>
                                <button className="btn btn-primary mr-2" onClick={this._handleFormSubmit}>Masuk</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pt-5 text-center">
                        <img src={imgVote} alt="" className="img-fluid" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="50" />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderComp)