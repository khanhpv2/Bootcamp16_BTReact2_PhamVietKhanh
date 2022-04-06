import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

export default class BaiTapThuKinh extends Component {


    state = {
        glassesCurrent :{
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    
    renderGlassesList = () => {
        return dataGlasses.map((glassesItem,index) => {
            return <img onClick={() => {
                this.changeClasses (glassesItem)
            }} className='ml-2 p-1 border border-width-1' style={{width:'110px',cursor:'pointer'}} src={glassesItem.url} key={index} />
        })

    }
    changeClasses = (newGlasses) => {
        this.setState ({
            glassesCurrent:newGlasses
        })

        
    }


    render() {
        const keyFrame = `@keyframes animChangeGlasses${Date.now()} {
            form {
                width:0;
                transform:rotate(45deg);
                opacity:0;
            }
            to {
                width:150px;
                opacity:0.7;
                transform: rotate(0deg);
            }
        }`

        

        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 1s`
        }

        const infoGlass = {
             width:'250px',
             top:'200px',
             left:'270px',
             paddingLeft:'15px',
             backgroundColor:'rgba(255,127,0,0.5)',
             textAlign:'left',
             height:'105px'   
        }
        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '1500px', minHeight: '1500px' }}>
                <style>
                    {keyFrame};
                </style>
                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: '1500px' }}>
                    <h3 style={{ backgroundColor: 'rgba(0,0,0,.2)' }} className='text-center text-light p-5'>TRY CLASSES APP ONLINE</h3>

                    <div className="container">
                        <div div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className='position-relative'>
                                    <img className='position-absolute' style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                                    <img style={styleGlasses} className='position-absolute' src={this.state.glassesCurrent.url} alt="" />
                                    <div style={infoGlass} className='position-relative '>
                                        <span style={{color:'blue',fontSize:'17px'}} className='font-weight-bold'>{this.state.glassesCurrent.name}</span> <br />
                                        <span style={{fontSize:'14px',fontWeight:'400'}}>{this.state.glassesCurrent.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img style={{ width: '250px' }} src="./glassesImage/model.jpg" alt="model" />
                            </div>
                        </div>
                    </div>
                    {/* div chứa kính được chọn*/ }
                    <div className='bg-light container text-center d-flex mt-5 p-5 justify-content-center'>
                        {this.renderGlassesList()}
                    </div>

                </div>

            </div>
        )
    }
}
