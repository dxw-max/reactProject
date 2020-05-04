import React, { Component } from 'react'
import style from '../../assets/style/theater/Theater.module.css'
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default class Theater extends Component {
    render() {
        return (
            <div className={style.theater}>
              
                <h3 className={style.foter}>剧院</h3>
               <div className={style.total}>
                         {/* 第一个div内容 */}
                         <div className={style.content}>
                     {/* 页面跳转加文字    */}
                     <a >
                           
                        <div className={style.img}>
                            <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt=""/>
                        </div>
                        {/* 文字2行 */}
                            <div className={style.name}>
                            <p className={style.a}>南山文体中心</p>
                            <p className={style.b}>92场在售演出</p>
                            </div>
                     </a>
                       <div className={style.nameimg}>
                      
                           <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt=""/>
                     

                       </div>

                    </div>
                    {/* 轮播图 */}
                    <div className={style.banner}>
                    <div>
                      

                        <div>
                            <div className={style.hot_list}>
                                <div className="swiper-container swiper2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月29 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/3B/rAoKmV3DeSKACY6QAACUY2-qyys818.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月30 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/3C/rAoKNV5wbveAJgk0AABW2kJicvo624.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月4日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月10日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月11日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月16日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E5/rAoKNV3DzAGAAg8KAABs-X44akw723.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                  >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </div> 
                </div>


                 <div className={style.total}>
                         {/* 第一个div内容 */}
                         <div className={style.content}>
                     {/* 页面跳转加文字    */}
                     <a >
                           
                        <div className={style.img}>
                            <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt=""/>
                        </div>
                        {/* 文字2行 */}
                            <div className={style.name}>
                            <p className={style.a}>南山文体中心</p>
                            <p className={style.b}>92场在售演出</p>
                            </div>
                     </a>
                       <div className={style.nameimg}>
                      
                           <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt=""/>
                     

                       </div>

                    </div>
                    {/* 轮播图 */}
                    <div className={style.banner}>
                    <div>
                      

                        <div>
                            <div className={style.hot_list}>
                                <div className="swiper-container swiper2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月29 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/3B/rAoKmV3DeSKACY6QAACUY2-qyys818.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月30 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/3C/rAoKNV5wbveAJgk0AABW2kJicvo624.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月4日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月10日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月11日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月16日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E5/rAoKNV3DzAGAAg8KAABs-X44akw723.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                  >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </div> 
                </div> 


                 <div className={style.total}>
                         {/* 第一个div内容 */}
                         <div className={style.content}>
                     {/* 页面跳转加文字    */}
                     <a >
                           
                        <div className={style.img}>
                            <img src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt=""/>
                        </div>
                        {/* 文字2行 */}
                            <div className={style.name}>
                            <p className={style.a}>南山文体中心</p>
                            <p className={style.b}>92场在售演出</p>
                            </div>
                     </a>
                       <div className={style.nameimg}>
                      
                           <img src="https://m.juooo.com/static/img/more.2ce7873.png" alt=""/>
                     

                       </div>

                    </div>
                    {/* 轮播图 */}
                    <div className={style.banner}>
                    <div>
                      

                        <div>
                            <div className={style.hot_list}>
                                <div className="swiper-container swiper2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月29 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/3B/rAoKmV3DeSKACY6QAACUY2-qyys818.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>5月30 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/3C/rAoKNV5wbveAJgk0AABW2kJicvo624.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月4日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/04/04/rAoKNV3o3tCAbCKNAAB3v6NC4vs503.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月10日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LAe6AC-vwAACnPMZe_TQ780.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月11日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/7A/rAoKmV4LA6yAXaxZAADECkMJVM8462.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt="" />
                                                </div>
                                              
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月12日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E6/rAoKNV3FDp2AYoW7AADDFklcihs978.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                            <h3>6月16日 </h3>
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/E5/rAoKNV3DzAGAAg8KAABs-X44akw723.jpg" alt="" />
                                                </div>
                                                
                                            </a>
                                        </div>
                                  >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </div> 
                </div>     
            </div>
        )
    }
}
