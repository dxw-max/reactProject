import React, { Component } from 'react'
import style from "../assets/style/show/show.module.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import showTypeCreator from "../store/actionCreator/show/index"
import { Row, Col } from 'antd';


class show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftColumn: [],
            rightColumn: []
        }
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


                <Row>
                    <Col span={18} push={6}>
                        col-18 col-push-6
                    </Col>
                    <Col span={6} pull={18}>
                        col-6 col-pull-18
                    </Col>
                </Row>,
                 

                {/* <div>
                    {
                       this.props.showList.map(v=>(
                           <div key={v.schedular_id}>
                               <div>{v.name}</div>
                           </div>
                       ))
                    }
                </div> */}

                {/* <div id={style.recommend}>
                    <h3>为你推荐</h3>
                    <div className={style.show_list}>
                        <div id="templatesWrap" className="clearfix">
                            <div className="leftColumn" ref={(lc) => { this.leftColumn = lc }}>
                                <ul>
                                    {
                                        this.state.leftColumn.map((item, index) => {
                                            return <li key={index} className={style.show_list_item}>
                                                <div className={style.show_list_item_pic}>
                                                    <img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt="" />
                                                    <span>深圳</span>
                                                </div>
                                                <div className={style.show_list_item_info}>
                                                    <div className={style.show_list_item_info_title}>
                                                        <div className={style.show_list_item_info_title_sponsor}>
                                                            <img src="https://image.juooo.com/upload/i.png" alt="" />
                                                        </div>
                                                        <h3>
                                                            【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站
                                                        </h3>
                                                    </div>
                                                    <p className={style.show_list_item_info_date}>
                                                        <span>2020.06.12 - 06.14  </span>
                                                    </p>
                                                    <p className={style.show_list_item_info_pic}>
                                                        <span>￥280</span><span>起</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_bottom}>
                                                        <span>电子票</span>
                                                        <span>可选座</span>
                                                        <span>限时8折起</span>
                                                    </p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="rightColumn" ref={(rc) => { this.rightColumn = rc }}>
                                <ul>
                                    {
                                        this.state.rightColumn.map((item, index) => {
                                            return <li key={index} className={style.show_list_item}>
                                                <div className={style.show_list_item_pic}>
                                                    <img src="https://image.juooo.com/group1/M00/03/25/rAoKmV2f3-yADPouAACAMESBbK8067.jpg" alt="" />
                                                    <span>深圳</span>
                                                </div>
                                                <div className={style.show_list_item_info}>
                                                    <div className={style.show_list_item_info_title}>
                                                        <div className={style.show_list_item_info_title_sponsor}>
                                                            <img src="https://image.juooo.com/upload/i.png" alt="" />
                                                        </div>
                                                        <h3>
                                                            【演出延期】聚橙出品 |百老汇现象级原版音乐剧《来自远方》-深圳站
                                                        </h3>
                                                    </div>
                                                    <p className={style.show_list_item_info_date}>
                                                        <span>2020.06.12 - 06.14  </span>
                                                    </p>
                                                    <p className={style.show_list_item_info_pic}>
                                                        <span>￥280</span><span>起</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_bottom}>
                                                        <span>电子票</span>
                                                        <span>可选座</span>
                                                        <span>限时8折起</span>
                                                    </p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}


            </div>
        )
    }


    // FallsList() {
    //     const data = [1]
    //     let leftArr = [];
    //     let rightArr = [];
    //     //let that = this;
    //     data.forEach(item=> {
    //         console.log(1111111,this.leftColumn, this.rightColumn)
    //         let oHeightDiff = this.leftColumn.offsetHeight - this.rightColumn.offsetHeight;
    //         if (oHeightDiff > 0) {
    //             //左边高，新表格添加到右边
    //             leftArr.push(item);
    //         } else if (oHeightDiff <= 0) {
    //             //右边高，或一样高，新表格添加到左边
    //             rightArr.push(item);
    //         }
    //     });
    //     this.setState(prevState => ({
    //         leftColumn: prevState.leftColumn.concat(leftArr),
    //         rightColumn: prevState.rightColumn.concat(rightArr)
    //     }));
    //     console.log(this.state)
    // }

    componentDidMount() {
        new Swiper('.swiper_show', {
            freeMode: true,
            freeModeMomentum: false,
        })
        this.props.showTypeCreator.getShowType();
        this.props.showTypeCreator.getShow()
        //this.FallsList();
    }

}
function mapStateToProps(state) {
    //console.log(22,state.show.showList)
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