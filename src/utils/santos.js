import opt0 from '../img/Santos/opt0.png';
import opt1 from '../img/Santos/opt1.png';
import opt2 from '../img/Santos/opt2.png';
import opt3 from '../img/Santos/opt3.png';

const getRadomImage = () => {
    const images = [opt0, opt1, opt2, opt3];

    const img = images[Math.floor(Math.random()*images.length)];

    return img
}

export default getRadomImage;