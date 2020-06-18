import React, { Component } from 'react'
import { waves, avatar } from '../../asset';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class FooterComp extends Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: -30 }}>
                    <img src={waves} alt="" />
                </div>
                <div className="bg-biru">
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={avatar} alt="" className="img-fluid rounded-circle img-thumbnail " />
                            </div>
                            <div className="col-md-8">
                                <span className="titlename text-white">
                                    halo ! saya fikri suheri
                                </span>
                                <p className="text-white">
                                    Saya masih seorang junior programmer lulusan SMK tahun 2020, saat ini saya membutuhkan lowongan pekerjaan di bidang programming apabila Bapak/Ibu berniat untuk mempekerjakan saya bisa kontak whatsapp saya <a href=" https://api.whatsapp.com/send?phone=6281222627526">Disini</a>. Saya juga menerima pemesanan pembuatan aplikasi silahkan di cek portofolio saya  di bawah ini
                                </p>
                                <a target="_blank" href="https://www.instagram.com/suhericode/" className="mr-4"><FontAwesomeIcon icon={['fab', 'instagram']} size="6x" /></a>
                                <a target="_blank" href="https://github.com/fikrisuheri"><FontAwesomeIcon icon={['fab', 'github']} size="6x" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
