import React, { Component } from 'react'
import style from '../../assets/style/theater/Theater.module.css'
import Swiper from "swiper"
import "swiper/css/swiper.css"
export default class Theater extends Component {
    render() {
        return (
            <div className={style.home}>
                {/* 导航栏 */}
                <header>

                    <h3>影院</h3>


                </header>
                {/* 页面上 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/2">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>南山文体中心</p>
                                <p className={style.count}>92场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/2">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* 2222*/}




                                {/* 页面上2 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/3">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D3/rAoKmVwlyY6AHU-XAABZsyVCtbY679.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>石家庄大院</p>
                                <p className={style.count}>26场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/3">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>5月16 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/05/rAoKmV1n0dKATo6bAACxOrc6oq4254.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月6 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/AE/rAoKNV1n1C2AGEPcAACc7PU9jto143.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月10日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/04/31/rAoKNV4dN0WAfV85AABDepBGh0o831.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>7月4日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E6/rAoKNV3FHy2ADbEpAACdK5iHe7M989.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月1日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/45/rAoKmV3OeAOAfXbUAACnX7EfZ8Q762.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月15日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/DD/rAoKNV22r_KAMYIHAACFZkMT2yM542.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月22日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月23日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/34/rAoKmV22uICAQ2WLAAFPaGvA5rE897.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>








                {/* 页面上3 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/14">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/03/59/rAoKmV3nlWWAMOPEAAGuyNwgxik420.png" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>石家庄市青少年活动中心礼...</p>
                                <p className={style.count}>10场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/14">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>5月17 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D3/rAoKNV2lY1mAEqW6AADyRCIHhOc514.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月7 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D3/rAoKNV2lY1mAEqW6AADyRCIHhOc514.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>7月12日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E6/rAoKNV3FHy2ADbEpAACdK5iHe7M989.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月2日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/45/rAoKmV3OeJyAbSE3AACnX7EfZ8Q833.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>10月18日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E0/rAoKNV27xQyAWjKBAACgqkWuVI8461.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                      
                                           
                         
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                    {/* 页面上4 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/9">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D3/rAoKmVwl4IiASgaYAABZ72Vxl00142.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>固安大剧院</p>
                                <p className={style.count}>15场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/9">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>6月20 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D5/rAoKNV2nwraAQfEkAACcamyKID0202.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>7月5 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/2E/rAoKmV2tZOeADHvUAACprrXJhIE919.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月4日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/34/rAoKmV22u7KAEANeAACFZkMT2yM793.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月15日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/EF/rAoKNV3OeFOAC3R9AACnX7EfZ8Q720.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>10月15日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/6B/rAoKmV4AXkSAdphzAAGp6nceocQ895.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>10月16日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/04/15/rAoKNV4AXSKAeumIAAIlO07ksKU771.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>10月17日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/37/rAoKmV27xR-ARkZBAACgqkWuVI8926.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>10月14日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D5/rAoKNV2m0miATupUAACePEfinjA021.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            
                {/* 页面上5 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/8">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D3/rAoKmVwl27iAR1uuAABW36uG7rc089.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>合肥瑶海大剧院</p>
                                <p className={style.count}>4场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/8">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>6月20 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/FA/rAoKNV3fPESAX4kRAACEePd5un0237.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月12 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D9/rAoKNV2uugmAZgfuAACFlTMQqxI909.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                             
                       
                 
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>


                {/* 页面上6 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/6">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/02/7D/rAoKNVwl2RqADO9EAABQCo11Djk732.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>重庆文化宫大剧院</p>
                                <p className={style.count}>19场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/6">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>5月8 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E2/rAoKNV2_5ziAJ6iYAACUY2-qyys845.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>5月30 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/D7/rAoKNV2tKoOAUqZJAAC5BN21DIU794.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月11日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/05/rAoKmV1odMCAeZ8AAACmY6FGGvU674.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月12日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/AE/rAoKNV1oc5KAXhECAACCx9hWB0I859.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月13日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/DF/rAoKNV24_7GAHsmeAACTcmBh6nQ943.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月19日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/DE/rAoKNV24BW-AD4OfAABs-X44akw801.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月21日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E1/rAoKNV275iKAAROeAACsbxmXcP8704.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>7月4日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E1/rAoKNV275iKAAROeAACsbxmXcP8704.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* 页面上7 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/5">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D3/rAoKmVwl15WAAQqkAABYzNXiUJw484.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>宜昌剧院</p>
                                <p className={style.count}>1场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/5">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>11月8 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/06/rAoKmV1sgyKAHK0rAACkqd0OnLY797.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                   
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            
                {/* 页面上8 */}
                <div className={style.coment}>
                    {/* 文字部分 */}
                    <div className={style.nav}>
                        {/* 左边 */}
                        <a className={style.navimg} href="https://m.juooo.com/theater/detail/4">
                            <div className={style.navnimg}>
                                <img className={style.img} src="https://image.juooo.com//group1/M00/01/D3/rAoKmVwl01-AMyWtAABOFPUJ6I0728.jpg" alt="" />
                            </div>
                            <div className={style.wpap}>
                                <p className={style.name}>乌兰牧骑宫大剧院</p>
                                <p className={style.count}>9场在售演出</p>
                            </div>
                        </a>
                        {/* 右边图片 */}
                        <a className={style.right} href="https://m.juooo.com/theater/detail/4">
                            <div className="style.right">
                                <img className={style.tot} src="https://m.juooo.com/static/img/more.2ce7873.png" alt="" />
                            </div>
                        </a>
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
                                                    <h3>5月12 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/E5/rAoKNV3DzAGAAg8KAABs-X44akw723.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>5月23 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/DF/rAoKNV25AySAJbXZAACsbxmXcP8358.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>6月13日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/05/rAoKmV1n0dKATo6bAACxOrc6oq4254.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                            <div className="swiper-slide" id={style.swiper_slide_active}>
                                                <a href="">
                                                    <h3>8月29日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/FA/rAoKNV3fPESAX4kRAACEePd5un0237.jpg" alt="" />
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
                                                    <h3>9月5日 </h3>
                                                    <div className={style.hot_list_item}>
                                                        <img src="https://image.juooo.com//group1/M00/03/DF/rAoKNV248JaAMtvQAACAwimywVw016.jpg" alt="" />
                                                    </div>

                                                </a>
                                            </div>
                                           
                                           
                                
                                  </div>
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
 componentDidMount(){
    new Swiper('.swiper-container', {
        slidesPerView: 3,
            spaceBetween: 0
    })
 }
      
}



























