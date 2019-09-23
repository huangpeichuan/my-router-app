/**
 * Created by hpc on 2019/9/21.
 */
import React from 'react';
import { Row, Col, Card,Breadcrumb } from 'antd';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import 'antd/dist/antd.css';

const requireContext = require.context("./imgs",true, /^\.\/.*\.jpg$/);
const projectImgs = requireContext.keys().map(requireContext);


class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gallery: null
        };
        this.openGallery = this.openGallery.bind(this);
    }
    componentDidMount() {
    }
    componentWillUnmount = () => {
        this.closeGallery();
    };
    openGallery(item){
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            }
        ];
        const pswpElement = this.domDiv;
        const options = {index: 0,maxSpreadZoom:1};
        this.gallery = new PhotoSwipe( pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index, item) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function() { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
    render() {
        const imgs = [
            
            [
                projectImgs[0],
                projectImgs[1],
                projectImgs[2],
                projectImgs[3]
            ],
            [
                projectImgs[4],
                projectImgs[5],
                projectImgs[6],
                projectImgs[7]
            ],
            [
                projectImgs[8],
                projectImgs[9],
                projectImgs[10],
                projectImgs[11]
            ],
            [
                projectImgs[12],
                projectImgs[13],
                projectImgs[14],
                projectImgs[15]
            ],
            [
                projectImgs[16],
                projectImgs[17],
                projectImgs[18]
            ]
        ];
        const imgsTag = imgs.map(v1 => (
            v1.map(v2 => (
                <div className="gutter-box" key={v2}>
                    <Card bordered={false} bodyStyle={{ padding: 0 }}>
                        <div>
                            <img onClick={() => this.openGallery(v2)} alt="example" width="100%" src={v2} />
                        </div>
                        <div className="pa-m">
                            <h3>飞鱼的幻想之旅</h3>
                            <small><a href="https://blog.csdn.net/weixin_35654814/" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_35654814/</a></small>
                        </div>
                    </Card>
                </div>
            ))
        ));
        return (
            <div className="gutter-example button-demo">
                <Breadcrumb style={{ margin: '12px 12px' }}>
                    <Breadcrumb.Item>图片赏析</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter="10">
                    <Col className="gutter-row" md={4}>
                        {imgsTag[0]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[1]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[2]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[4]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[1]}
                    </Col>
                </Row>
                {/* <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }> */}
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={ div => this.domDiv = div }>

                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                <div className="pswp__counter" />

                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                                <button className="pswp__button pswp__button--share" title="Share" />

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>

                        </div>

                    </div>

                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}

export default Gallery;
