import React, { Component } from 'react'
import style from "../assets/style/show/show.module.css"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import showTypeCreator from "../store/actionCreator/show/index"
import axios from "axios"

class show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftColumn: [],
            rightColumn: [],
            page: 1
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
                           <ul className={style.showType}>
                                {
                                    this.props.showTypeList.map(v => (
                                     
                                        <li key={v.id}>
                                            <span>{v.name}</span>
                                        </li>
                                   
                                    ))
                                }
                           </ul>

                               
                          
                        </div>
                    </div>
                    <div className={style.city_wrap}>
                        <p>全国</p>
                        <svg className={style.icon} aria-hidden="true" >
                            <use xlinkHref="#iconshouhuodizhi"></use>
                        </svg>
                    </div>
                </div>

                <div id={style.recommend}>
                    <div className={style.show_list}>
                        <div id={style.templatesWrap} className="clearfix" ref={(e) => { this.falls = e }}>
                            <div className={style.leftColumn}>
                                <ul ref={(e) => { this.leftColumn = e }}>
                                    {
                                        this.state.leftColumn.map((item, index) => {
                                            return <li key={index} className={style.show_list_item}>
                                                <div className={style.show_list_item_pic}>
                                                    <img src={item.pic} alt="" />
                                                    <span>{item.city_name}</span>
                                                </div>
                                                <div className={style.show_list_item_info}>
                                                    <div className={style.show_list_item_info_title}>
                                                        <div className={style.show_list_item_info_title_sponsor}>
                                                            <img src="https://image.juooo.com/upload/i.png" alt="" />
                                                        </div>
                                                        <h3>
                                                            {item.name}
                                                        </h3>
                                                    </div>
                                                    <p className={style.show_list_item_info_date}>
                                                        <span>{item.end_show_time}</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_pic}>
                                                        <span>￥{item.min_price}</span><span>起</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_bottom}>
                                                        <span>{item.support_desc[0]}</span>
                                                        <span>{item.support_desc[1]}</span>
                                                        <span>{item.support_desc[2]}</span>
                                                    </p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={style.rightColumn}>
                                <ul ref={(e) => { this.rightColumn = e }}>
                                    {
                                        this.state.rightColumn.map((item, index) => {
                                            return <li key={index} className={style.show_list_item}>
                                                <div className={style.show_list_item_pic}>
                                                    <img src={item.pic} alt="" />
                                                    <span>{item.city_name}</span>
                                                </div>
                                                <div className={style.show_list_item_info}>
                                                    <div className={style.show_list_item_info_title}>
                                                        <div className={style.show_list_item_info_title_sponsor}>
                                                            <img src="https://image.juooo.com/upload/i.png" alt="" />
                                                        </div>
                                                        <h3>
                                                            {item.name}
                                                        </h3>
                                                    </div>
                                                    <p className={style.show_list_item_info_date}>
                                                        <span>{item.end_show_time}</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_pic}>
                                                        <span>￥{item.min_price}</span><span>起</span>
                                                    </p>
                                                    <p className={style.show_list_item_info_bottom}>
                                                        <span>{item.support_desc[0]}</span>
                                                        <span>{item.support_desc[1]}</span>
                                                        <span>{item.support_desc[2]}</span>
                                                    </p>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <input type="button" value="加载更多" ref={e => this.btn = e} onClick={this.FallsList.bind(this)} />
                </div>


            </div>
        )
    }


    async FallsList() {
        const { data } = await axios.get("/jc/Show/Search/getShowList", {
            params: {
                page: this.state.page
            }
        })
        let leftArr = [];
        let rightArr = [];
        let that = this;
        data.data.list.forEach(function (item, index) {
            let oHeightDiff = that.leftColumn.offsetHeight - that.rightColumn.offsetHeight;
            if (oHeightDiff > 0) {
                //左边高，新表格添加到右边
                rightArr.push(item);
            } else if (oHeightDiff <= 0) {
                //右边高，或一样高，新表格添加到左边
                leftArr.push(item);
            }
            that.setState({
                leftColumn: leftArr,
                rightColumn: rightArr
            })
        });
        that.setState({
            leftColumn: [
                ...that.state.leftColumn,
                ...leftArr
            ],
            rightColumn: [
                ...that.state.rightColumn,
                ...rightArr
            ],
            page: this.state.page + 1,
        });
        console.log(this.state.page)
    }

    async componentDidMount() {
        new Swiper('.swiper_show', {
            freeMode: true,
            freeModeMomentum: false,
        })
        this.props.showTypeCreator.getShowType();
        this.props.showTypeCreator.getShow()
        this.FallsList();
        console.log(this.falls.offsetHeight)
        console.log(this.state)

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