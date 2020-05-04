import React, { Component } from 'react'
import style from '../../assets/style/Index/home.module.css'
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import homeActions from '../../store/actionCreator/home/index'


class Home extends Component {
    render() {
        return (
            <div className={style.home}>
                <header>
                    <div>
                        <svg className={style.icon} aria-hidden={true}>
                            <use xlinkHref="#icondingwei"></use>
                        </svg>
                        <span>全国</span>
                    </div>
                    <div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAXVBMVEUAAACzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MU5mdkAAAAHnRSTlMA+fES5d1bGgytwpCJIDy9p6Z+eWMpCKRv1sjGlU+Yw8sxAAAA/0lEQVQ4y+2TWXKDMBBENVrAYjHGGPD67n/MVEhiKiORcv7dX6Lr0UMLybz1D+2KQxAI8eT+wqbB8iPb7Da58QLgq9iFZbHf4Pb2M2dc1u3RgjzyeRa68vnoIkguc7rA/MtpwGcqDdApq4d7ui8WW2rPI9ozBTRG6wyD9g4wJqATKu0FvEl1Q7S1vqvm6N4QM2ANbQJ2GXAGXTsQMmCVfmOENt1c4aq9ExzNK6azWF1wCrkxDcS0c5+5BB4a/QNtmTu3Av1unVsDtcnpIeDP7iv/FAAo8nfBA3I71HMlgK03SXcXnupLU2ySphyWMLke2+9TKmZTrl27FhLNWy/oA9CZFFU7WU6aAAAAAElFTkSuQmCC" alt="" />
                        <span>搜索热门演出</span>
                    </div>
                    <div>
                        <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiFyKOAAAAHHRSTlMAwLCQ8XftzEURZffhq0IiujHF+bWZiFV/UA/dAxNAxgAAAS1JREFUOMu9kdtyhCAQRJHIVRBF3exu+v+/MyBamsQdKnnIebCnylMF07C/wLuenek7/l15cNe2LdC1ZzogfR1/7NpzAM3wLGIDwMUmhWvOOKBpokOK1bOA1HmYf9xxzqElYPMQgZ5R9EDM2cGl7/h2zZj+OXRZLFfguIaXJQ6x9/wK338VCf5RDMsHoISpie8SK3KkxZA8ofUCKFoUydtSk+IArGkAURPLGkWsHz3WjjaymB6qVg8AZS1Vz2FmxlrhAvASwGCqPY7MCFkrPGxLG1Wp5waEvXBFiQNwTJTogVAmRYsW8Oug00BurXLdWgtZfUKFgrQX9UR2wvpc4i2wg1jEFpLRSLQ5ZsCSngXmbcFJmJeaEdO+2IIay/5wEyimG9sJd968gt8D+w2fxdEtXiJn+tgAAAAASUVORK5CYII=" alt="" />
                        </span>
                    </div>
                </header>

                <div id={style.banner} className="swiper-container swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://image.juooo.com/group1/M00/03/95/rAoKmV6Ods6AIHoPAAFqMr3vOqU261.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://image.juooo.com/group1/M00/04/3F/rAoKNV6G8wWAbQo9AAFKecTbTmI168.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3CmARboCAACCt7TZJ7k095.png" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="https://image.juooo.com/group1/M00/03/6D/rAoKmV4B3DeAAheBAAE8k0yWnNo649.png" alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination" id={'swiper'}></div>
                </div>

                <section>
                    <div className={style.label_item}>
                        {
                            this.props.labelItemList.map(v => (
                                <div key={v.id} className={style.item_block} onClick={()=>{this.props.history.push("/show")}}>
                                    <a>
                                        <img src={v.pic} alt="" />
                                        <span>{v.name}</span>
                                    </a>
                                </div>
                            ))
                        }
                    </div>

                    <div className={style.vip_hanner}>
                        <a href="">
                            <div className={style.vip_hanner_top}>
                                <div className={style.vip_hanner_top_left}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAABd1BMVEUAAADvz6743L/22rz/6M/43cDpx6L/6M7w0bD43sHqx6T848ny1LTryKX33L//6M/z1rfryab017nsyqf/6M/538P+587tzKn95cv95cv/5872273uzav+5s3oxaD+5s3vz67pxqH95cr95crtzKnx0rLqx6T+5s3vzq3ryabw0bDtzKnx0rLx0rLoxJ/oxJ/95cz12bvsy6j12bv/6M/sy6jtzKrtzKruzq3oxaDoxJ/uzq3w0bDpx6Ly1LTryKX01rf/6M9HJwj95Mr017jtzKnsyqfryKX+5s3+5cz33L/227343sH12bv538P64cXy1LTuzavx0rLw0bDvz6774sfpxqBIKAnpx6KPclTix6uPclVXNxjmy7DKro+1mHyTdljw1LjlzLLfw6bYvaLNspSqi2uXeFp8XkB3WTtsTS5gQCJfPyBZOhtLKwzmzbPqy6vgxqjUuJrIqIjDpoi5noKylXaihWeegmWOcFKQcFCDY0RnSCn+eriUAAAAQXRSTlMA/g4J+hv5A/n48/Lq6uTh4eDS0s7JxrGwqI2Kh21qaVtbT0pCNzcwJBwUBfXz6uTNyMjBv7+kmHd2cGpNTCwrAhUStP0AAAG1SURBVDjLjdAHU9tAEAXgZ8uF3ktooff03hOtSXMhDoYowhjTAoQQ0nt+PLuyZOmwJPhmpNvZfXM7c7DND3XF9BqxruEkFNEePcANDV7n9EB98BjTQ4x7FreGBVujcPTrofphm469CPSJv9g0LMkrLwNt0Rb/e55ADKWClagkxzBYvNHpvieiox9S/Sa2lioXi1Qs7qRSjXF5whXH4kce70u1ecTV3krZNMk0d7jRB4y9csmVB1JscPEhw8UqrVZG4+hedP2RhXxuG0TGO+lwsDLqRn3W9Ys4kM5m9/ncqLS+2KN6tKRdZWKl9Los3kwrWjCQcUmCvub+y+KMagDa1VzVNrHvP2VxTnVdA+Y6Fhx5gzO7a0SHhQVFRxQs3lZtyENyzlhXc21xWB415W0HZDHziqYZ2CYvLFX8I3H4ecnr4iSqHtQVLHvEjG8Fr7oJeIxElsUusb/LXpERKO5EAtzHCYOvfQ2ixq2nPm6j1nxvba43CR/atWcn3NTga65TzXVGEWC2/blH+ywCPW52c80zCDHV4OQaphDqYeKtJTGBU4y+EYlRnOquBM/jDO5dvuSTOwZ3nQUiwxrMfwAAAABJRU5ErkJggg==" alt="" />
                                    <span>会员专享折扣</span>
                                </div>
                                <div className={style.vip_hanner_top_right}>
                                    <span>99元/年</span>
                                    <span></span>
                                </div>
                            </div>
                        </a>
                        <div className={style.vip_swiper}>
                            <div id={style.swiper_container} className="swiper-container swiper1">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className={style.swiper_list}>
                                            <div className={style.swiper_list_item}>
                                                <a href="">
                                                    <img src="https://image.juooo.com/group1/M00/03/38/rAoKmV2_wuuAQ3PKAAC-dYecJHk485.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className={style.swiper_list_info}>
                                                <a href="">
                                                    <h3>【小橙堡】经典亲子童话剧《胡桃夹子》-固安站</h3>
                                                    <p>
                                                        <span>5</span>
                                                        <span>折起</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="">
                                                <span className={style.swiper_list_buy}>立即抢购</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" id={'swiper1'}></div>
                            </div>
                        </div>
                    </div>

                    <div className={style.vip_adv}>
                        <a href="">
                            <img src="https://image.juooo.com/group1/M00/03/96/rAoKmV6W4RyAdkouAAJa2-GtD74165.png" alt="" />
                        </a>
                    </div>
                </section>

                <div className={style.hot_warp}>
                    <div>
                        <div className={style.hot_warp_title}>
                            <h3>热门演出</h3>
                            <div className={style.hot_warp_title_arrow}>
                                <span>全部</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className={style.hot_list}>
                                <div className="swiper-container swiper2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                        <div className="swiper-slide" id={style.swiper_slide_active}>
                                            <a href="">
                                                <div className={style.hot_list_item}>
                                                    <img src="https://image.juooo.com//group1/M00/03/6C/rAoKmV4AZ3GAK-xpAABsQm0qZyQ219.jpg" alt="" />
                                                </div>
                                                <h3>2020第七届城市戏剧节 《涂红》-石家庄站</h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.hot_warp}>
                    <div>
                        <div className={style.hot_warp_title}>
                            <h3>巡回演出</h3>
                            <div className={style.hot_warp_title_arrow}>
                                <span>全部</span>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className={style.tour}>
                        <div className={style.tour_info}>
                            <div className={style.tour_info_img}>
                                <img src="https://image.juooo.com/group1/M00/04/3E/rAoKNV59rlWAUODrAABlWN_fCvM347.jpg" alt="" />
                            </div>

                            <div className={style.tour_info_detail}>
                                <span>2020.08.13 - 10.03</span>
                                <p>
                                    聚橙制作 | 法语音乐剧《摇滚红与黑》
                                </p>
                            </div>

                            <div className={style.tour_info_pic}>
                                <p>
                                    <span>¥</span>
                                    <span>80</span>
                                    <span>起</span>
                                </p>

                                <div className={style.tour_info_city}>
                                    <div className={style.tour_info_city_left}>
                                        <span>6</span>
                                        <span>城巡演</span>
                                    </div>
                                    <div className={style.tour_info_city_right}>
                                        <span>上海<i>|</i></span>
                                        <span>广州<i>|</i></span>
                                        <span>深圳<i>|</i></span>
                                        <span>成都<i>|</i></span>
                                        <span>上海<i>|</i></span>
                                        <span>上海<i>|</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    componentDidMount() {
        new Swiper('.swiper', {
            autoplay: true,
            direction: 'horizontal',//竖向轮播
            loop: true,//无缝轮播
            pagination: {//小圆点分页
                el: '#swiper',
            }
        })
        new Swiper('.swiper1', {
            autoplay: true,
            direction: 'horizontal',//竖向轮播
            loop: true,//无缝轮播
            pagination: {//小圆点分页
                el: '#swiper1',
            }
        })
        new Swiper('.swiper2', {
            slidesPerView: 3,
            spaceBetween: 0
        })
        this.props.homeActions.getLabelItem();
    }
}
function mapStateToProps(state) {
    return {
        labelItemList: state.home
    }
}
function mapDispatchToProps(dispatch) {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)