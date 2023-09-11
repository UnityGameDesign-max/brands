import React from 'react';
import './brands.scss';
import Visa from 'assets/brands/Visa.svg';
import TymeBank from 'assets/brands/TymeBank.svg';
import Distell from 'assets/brands/Distell.svg';
import Spotify from 'assets/brands/Spotify.svg';
import Microsoft from 'assets/brands/Microsoft.svg';
import Engen from 'assets/brands/Engen.svg';
import Nike from 'assets/brands/Nike.svg';
import Wesgro from 'assets/brands/Wesgro.svg';
import Multichoice from 'assets/brands/MultiChoice.svg';
import PicknPay from 'assets/brands/PicknPay.svg';
import Liquid from 'assets/brands/Liquid.svg';
import TFG from 'assets/brands/TfG.svg';
import Sanlam from 'assets/brands/Sanlam.svg';
import Santam from 'assets/brands/Santam.svg';
import BBC from 'assets/brands/BBC.svg';

function Brands() {
  return (
    <div className='container'>
        <h3>You'll be in good company</h3>
        <h1 className='pd-vertically-2 trusted-title'>Trusted by leading brands</h1>

        <div className='brand-container pd-vertically-2'>
            <img src={Visa} alt='visa'/>
            <img src={TymeBank} alt='tymebank'/>
            <img src={Distell} alt='distell'/>
            <img src={Spotify} alt='spotify'/>
            <img src={Microsoft} alt='microsoft'/>
            <img src={Engen} alt='engen'/>
            <img src={Nike} alt='nike'/>
            <img src={Wesgro} alt='wesgro'/>
            <img src={Multichoice} alt='multichoice'/>
            <img src={PicknPay} alt='picknpay'/>
            <img src={Liquid} alt='liquid'/>
            <img src={TFG} alt='TFG'/>
            <img src={Sanlam} alt='sanlam'/>
            <img src={Santam} alt='santam'/>
            <img src={BBC} alt='bbc'/>
        </div>
    </div>
  )
}

export default Brands