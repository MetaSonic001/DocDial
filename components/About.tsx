import Image from 'next/image';
import aboutImg from '../public/assets/images/about-card.png';
import aboutCardImg from '../public/assets/images/about.png';

const About: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <Image src={aboutImg} alt="About Image" layout="responsive" width={1200} height={800} />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                            <Image src={aboutCardImg} alt="About Card Image" layout="responsive" width={300} height={300} />
                        </div>
                    </div>
                    
                    {/* About Content */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">Proud to be one of the nations best</h2>
                        <p className="text__para">For 30 years, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quasi voluptas a ea perferendis eius suscipit alias quos, modi vitae laboriosam amet quae ducimus natus expedita asperiores distinctio odit nulla.</p>

                        <p className="text__para mt-[30px]">Our best Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorum quae rerum doloremque commodi sapiente ratione quisquam laudantium modi sequi. Repudiandae facilis vel dolores sunt pariatur, nemo perferendis ullam tempore!</p>

                        <a href="/"><button className="mt-[30px] bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg font-bold text-white">Learn More</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
