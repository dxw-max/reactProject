import React, { Component } from 'react'
import style from "../assets/style/show/show.module.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import showTypeCreator from "../store/actionCreator/show/index"


class show extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={style.box}>
                <div className={style.header} >
                    <span>演出</span>
                    <div className={style.go} onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        <svg className={style.icon} aria-hidden="true">
                            <use xlinkHref="#iconicon4"></use>
                        </svg>
                    </div>
                </div>

                <div className={style.nav}>
                    <div className="swiper-container swiper_show">
                        <div className="swiper-wrapper">
                            <div className={style.showType}>

                                {

                                    this.props.showTypeList.map(v => (
                                        <ul className={style.showType_ul} key={v.id}>
                                            <li className={style.showType_li}>{v.name}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.city_wrap}></div>
                </div>

                <div className={style.show_list}>
                    {
                      this.props.showList.map(v=>(
                          <div key={v.schedular_id}>
                              <div>{v.name}</div>
                          </div>
                      ))
                    }
                    
                </div>
            </div>
        )
    }
    componentDidMount() {
        new Swiper('.swiper_show', {
            freeMode: true,
            freeModeMomentum: false,
        })
        this.props.showTypeCreator.getShowType();
        this.props.showTypeCreator.getShow()


    }

}
function mapStateToProps(state) {
    //console.log(22,state.show.showTypeList)
    return {
        showTypeList: state.show.showTypeList,
        showList: state.show.showList
    }

}
function mapDispatchToProps(dispatch) {
    return {
        showTypeCreator: bindActionCreators(showTypeCreator, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(show)