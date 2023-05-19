import React, { useEffect, useState } from 'react';
import Banner from '../../Shared/Banner/Banner';
import Sticker from '../../Components/Sticker/Sticker';
import TabsSection from '../../Components/Tabs/TabsSection';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Home = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState("Disney-Princes")


    useEffect(() => {
        fetch(`https://dream-disney-server-site.vercel.app/categories/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setDolls(data)
                console.log(data)
            })
    }, [activeTab])
    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
            <Banner></Banner>
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

        </div>
    );
};

export default Home;