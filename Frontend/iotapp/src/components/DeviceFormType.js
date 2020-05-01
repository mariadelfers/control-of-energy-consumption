import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';

export default function DeviceFormType({ deviceFormType: {deviceType} }) {
    return (
      <div className="form-device">
  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <div className="title-form-device">
          <h1 className="label-form-device">Tipo del dispositivo: </h1>
          <input class="input-search-device" type="text" placeholder="Buscar"></input>
        </div>

        
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                    
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                    
                    <div class="carousel-inner">
                        <div class="item carousel-item active">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/ipad.jpg" class="img-responsive img-fluid" alt=""></img>                                        </div>
                                        <div class="thumb-content">
                                            <h4>Luz</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/headphone.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>TV</h4>
                                            
                                        </div>						
                                    </div>
                                </div>		
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/macbook-air.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Bocina</h4>
                                            
                                        </div>						
                                    </div>
                                </div>								
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/nikon.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Refrigerador</h4>
                                            

                                        </div>						
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item carousel-item">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/play-station.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Celular</h4>
                                            

                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/macbook-pro.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Laptop</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/speaker.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Computadora</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/galaxy.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Cafetera</h4>
                                            
                                        </div>						
                                    </div>
                                </div>						
                            </div>
                        </div>
                        <div class="item carousel-item">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/iphone.jpg" class="img-responsive img-fluid" alt=""></img>
                                        <div class="thumb-content">
                                            <h4>Microondas</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/canon.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Tostadora</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/pixel.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Licuadora</h4>
                                            
                                        </div>						
                                    </div>
                                </div>	
                                <div class="col-sm-3">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <img src="/examples/images/products/watch.jpg" class="img-responsive img-fluid" alt=""></img>
                                        </div>
                                        <div class="thumb-content">
                                            <h4>Lavadora</h4>
                                            
                                        </div>						
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                </div>
            </div>
        </div>

        </div>
            
      </div>
    );
  }
  
  DeviceFormType.propTypes = {
    deviceFormType: PropTypes.shape({
        deviceType: PropTypes.string.isRequired,
      }),
    };