import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {SeletorPersonagemBoxWrapper} from './style';
import {setPersonagemFeminino, setPersonagemMasculino} from './../../store/modules/seletorPersonagem/actions'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import pf01 from './img/pf01.png';
import pf02 from './img/pf02.png';
import pf03 from './img/pf03.png';
import pf04 from './img/pf04.png';
import pf05 from './img/pf05.png';
import pm01 from './img/pm01.png';
import pm02 from './img/pm02.png';
import pm03 from './img/pm03.png';
import pm04 from './img/pm04.png';
import pm05 from './img/pm05.png';

const pm_list = [
    { code: 0, src: pm01,},
    { code: 1, src: pm02,},
    { code: 2, src: pm03,},
    { code: 3, src: pm04,},
    { code: 4, src: pm05,},
];

const pf_list = [
    { code: 0, src: pf01,},
    { code: 1, src: pf02,},
    { code: 2, src: pf03,},
    { code: 3, src: pf04,},
    { code: 4, src: pf05,},
];

const SeletorPersonagem = (props) => {
    const dispatch = useDispatch();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const imgList = props.sexo == "m" ? pm_list : pf_list;

    function setIndexPersonagem(index)
    {
        if(props.sexo == "f") {
            dispatch(setPersonagemFeminino(index));
        }
        if(props.sexo == "m") {
            dispatch(setPersonagemMasculino(index));
        }
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === imgList.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        setIndexPersonagem(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? imgList.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
        setIndexPersonagem(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = imgList.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="carouselItem"
                tag="div"
            >
                <img src={item.src}/>
            </CarouselItem>
        );
    });

    return (
        <SeletorPersonagemBoxWrapper>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                enableTouch={false}
                interval={false}
                slide={false}
            >
                <CarouselIndicators items={imgList} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </SeletorPersonagemBoxWrapper>
    );
}

export default SeletorPersonagem;