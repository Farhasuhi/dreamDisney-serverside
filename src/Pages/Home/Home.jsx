import React, { useEffect, useState } from 'react';
import Banner from '../../Shared/Banner/Banner';
import Sticker from '../../Components/Sticker/Sticker';
import TabsSection from '../../Components/Tabs/TabsSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import image from '../../assets/5eeb5eb3-dc02-40f5-8ad6-17a945ddd1e5-Dolls.jpg'
import Photos from '../../Components/Photos/Photos';
import Reviews from '../../Components/Review/Reviews';
import useTittle from '../../hooks/useTittle';
import Contact from '../../Components/Contact/Contact';



const Home = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney-Princes");
    useTittle('home')


    useEffect(() => {
        fetch(`https://dream-disney-server-site.vercel.app/categories/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setDolls(data.slice(0,2))
                console.log(data)
            })
    }, [activeTab])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
            <Banner>
                <div className='relative w-full' >
                    <img src={image} className="w-full rounded-xl" />
                    <div className="absolute h-full w-full justify-start flex items-center left-0 top-0  bg-gradient-to-tr from-[#d1d3d4] to-[rgba(21, 21, 21, 0)] rounded-xl">
                        <div className='text-white space-y-7 pl-12 w-1/2' data-aos="fade-right" data-aos-duration="2000">
                            <h2 className='text-4xl text-[#20374d] md:text-6xl font-bold'>Dolls</h2>
                            <p className='text-[#3f4142] text-[16px] font-medium'>Its endless possibilities with these dolls.</p>
                        </div>
                    </div>
                </div>
            </Banner>
            <Sticker></Sticker>
            <div className='w-[95%] md:w-[90%] mx-auto '>
                <div className='text-center text-4xl font-extrabold'>
                    <h3 className='mt-[100px] mb-[50px] text-[#082c4e]'>Categories</h3>
                </div>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleTabClick("Disney-Princes")} className={`tab  tab2 tab3 remote ${activeTab == "Disney-Princes" ? " bg-[#43678a] text-white font-bold" : ""
                            }`}>Disney Princes</Tab>
                        <Tab onClick={() => handleTabClick("PrinceDoll")} className={`tab  tab2 tab3 PrinceDoll ${activeTab == "PrinceDoll" ? "bg-[#43678a] text-white font-bold" : ""
                            }`}>Prince Doll</Tab>
                        <Tab onClick={() => handleTabClick("frozen-doll")} className={`tab  tab2 tab3 frozen-doll ${activeTab == "frozen-doll" ? " text-white font-bold" : ""
                            }`}>frozen doll</Tab>
                    </TabList>

                    <div className='mt-10 bg-[#d8dbdf] p-5'>
                        <TabPanel >
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {dolls.map(doll => <TabsSection key={doll._id} doll={doll}></TabsSection>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {dolls.map(doll => <TabsSection key={doll._id} doll={doll}></TabsSection>)}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                {dolls.map(doll => <TabsSection key={doll._id} doll={doll}></TabsSection>)}
                            </div>
                        </TabPanel>
                    </div>

                </Tabs>

            </div>
            <Photos></Photos>
            <Reviews></Reviews>
            <Contact></Contact>              
        </div>
    );
};

export default Home;