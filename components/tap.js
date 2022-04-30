import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Video from './video'
import Head from 'next/head'
export default function LabTabs() {
  const [value, setValue] = React.useState('2');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

    <Box sx={{ width: '100%', typography: 'body1', textAlign: 'center',}}>
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', fontSize: '48px', width: '100%', height: '100%' }}>
          <TabList onChange={handleChange}  centered >
            <Tab label="English" value="1"  sx={{ fontSize: 'bold'}}/>
            <Tab label="فارسی" value="2" sx={{ fontSize: 'bold', fontFamily: "'Vazirmatn', sans-serif",}}/>
            <Tab label="Türkçe" value="3" sx={{ fontSize: 'bold'}}/>
          </TabList>
        </Box>
        <TabPanel 
          value="1"
          sx={{
            fontFamily: "'Ubuntu', sans-serif",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 0,
            width: '100%',
            height: '100%'

          }}
          
        >
          <Video
            option={{
              autoplay: false,
            }}
            content={{
              title: 'Cactus Robotic Co.',
              p: 'The first technical and specialized workshop of students in the north of the country (robotics section) at the level of global educational method with 14 years of experience.'
            }}
          />
        </TabPanel>
        <TabPanel 
          value="2"
          sx={{
            fontFamily: "'Vazirmatn', sans-serif",
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',margin: 0,
            width: '100%',
            height: '100%'

          }}
          style={{
            direction: 'rtl'
          }}
        >
          <Video
            option={{
              autoplay: true,
            }}
            content={{
              title: 'شرکت روباتیک کاکتوس',
              p: 'اولین کارگاه فنی و تخصصی دانش آموزی شمال کشور بخش روباتیک در سطح متد آموزشی جهانی با چهارده سال سابقه فعالیت'
            }}
          />
        </TabPanel>
        <TabPanel 
          value="3"
          sx={{
            fontFamily: "'Arial', sans-serif",
            direction: 'rtl',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 0,
            width: '100%',
            height: '100%'

          }}
          style={{
            direction: 'rtl'
          }}
        >
          <Video
            option={{
              autoplay: false,
            }}
            content={{
              title: 'Kaktüs Robotik Şirketi',
              p: 'Ülkenin kuzeyindeki robotik bölümünde, 14 yıllık deneyime sahip küresel eğitim yöntemi düzeyinde öğrencilerin ilk teknik ve uzmanlık atölyesi'
            }}
          />
        </TabPanel>
      </TabContext>
    </Box>
    </>
  );
}