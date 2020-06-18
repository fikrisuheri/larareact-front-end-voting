import React, { useEffect } from 'react'
import { BASE_URL, URL_API } from '../../utils/api'
import Aos from 'aos'
import Axios from 'axios';
export default function ListKandiad({ name, id, avatar,onClick,onClickVisi }) {

    return (
        <div className="col-md-3">
            <div className="card mb-4 p-3" data-aos="zoom-in" data-aos-duration="700" data-aos-delay="50">
                <img className="card-img-top rounded-circle img-fluid" src={BASE_URL + '/storage/' + avatar} />
                <div className="card-body">
                    <h5 className="card-title text-uppercase">{name}</h5>
                    <button className="btn btn-secondary btn-block" onClick={onClickVisi}>Lihat Visi Misi</button>
                    <button className="btn btn-primary btn-block" onClick={onClick}>Pilih {name}</button>
                </div>
            </div>
        </div>
    )
}
