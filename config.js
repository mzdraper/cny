var config = {
    style: 'mapbox://styles/mzdraper/ck5h6h3ma04vf1io8nbon7fuo',
    accessToken: 'pk.eyJ1IjoibXpkcmFwZXIiLCJhIjoiY2swcjVmOGUzMDFocTNjbzJmaWFpcGRoeCJ9.itsbJ9Kyqu5ENnaFaQQASw',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: 'Happy Chinese New Year!',
    subtitle: 'A map of our China team & how they welcome the lunar new year',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1',
            title: 'Mapbox China Team',
            image: 'images/china-team-party.jpeg',
            description: 'Chinese New Year is the most important festival for Chinese people. In 2020, we will celebrate from 1/24(New Year’s Eve) to 1/30, just like Christmas, there will be a heavy migration before New Year’s Eve, it may starts one week before New Year’s Eve, people working and living in metropolitan areas like Beijing, Shanghai, Guangzhou and go back to hometown and celebrate New Year’s Eve with their big family together. There are also superstitions people follow, such as lighting firecrackers to scare away evil spirits and not bathing on the New Years Day so you don’t wash away your luck!',
            location: {
                center: [83.526486, 43.993340],
                zoom: 3,
                pitch: 0,
                bearing: 0
            }
        },
        {
            id: '2',
            title: 'Celebrating in Beijing',
            image: '',
            description: 'Over 3 millennia old, Beijing combines ancient and modern architecture to represent the city’s cultural significance and impact as a hub for politics, business and technology. It is now the capital of the People’s Republic of China and home to over 21 million residents. During Chinese New Year, Beijing hosts Temple Fairs where visitors welcome the new year by paying respects to ancestors and enjoy entertainment such as lion dancing and festival food.',
            location: {
                center: [116.406923, 39.903435],
                zoom: 6,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
              {
                    layer: 'beijinglion1',
                    opacity: 1
                },
                {
                    layer: 'beijinglion2',
                    opacity: 1
                },
                {
                    layer: 'beijinglion3',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '3',
            title: 'Kevin Li',
            image: 'images/kevin-li.jpeg',
            description: 'Kevin Li is an Android Engineering Manager for on our China team. Kevin lives in Beijing and travels to Qingdao, Shandong for Spring Festival.',
            location: {
                center: [116.44829, 39.93710],
                zoom: 7,
                pitch: 30,
                bearing: -40
            },
            onChapterEnter: [],
            onChapterExit: [
              {
                    layer: 'beijinglion1',
                    opacity: 0
                },
                {
                    layer: 'beijinglion2',
                    opacity: 0
                },
                {
                    layer: 'beijinglion3',
                    opacity: 0
                }
            ]
        },
        {
            id: '4',
            title: 'Qingdao, Shandong',
            image: 'images/kevin-firecracker.jpeg',
            description: '"We will set off firecrackers in the Chinese New Year\'s Eve to greet our ancestors to go home to celebrate Chinese New Year, which represents the beginning of the New Year. The family has a hearty dinner together. At 12 a.m middle night, we will set off firecrackers and eat dumplings again. In the evening of new year’s second day, a fourth firecracker will be set off and the ancestors will be sent away, representing the end of the Chinese New Year."',
            location: {
                center: [120.379012, 36.084378],
                zoom: 7,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            title: 'Celebraiting in Shanghai',
            image: '',
            description: 'Originally a fishing village located on the southern estuary of the Yangtze River, Shanghai is now the most populous city in China with over 24 million residents and an epicenter for innovative technology, finance and transportation. Shanghai\'s Yuyuan Lantern Festival is a time for people to celebrate by sending up flying lanterns, have a meal of Tangyuan, and enjoy time together with family and friends in parks and answering lantern riddles.',
            location: {
                center: [121.381559, 31.090013],
                zoom: 7,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [
               {
                    layer: 'shanghailantern1',
                    opacity: 1
                },
                {
                    layer: 'shanghailantern2',
                    opacity: 1
                },
                {
                    layer: 'shanghailantern3',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: '6',
            title: 'Sarah He',
            image: 'images/sarah-he.jpeg',
            description: 'Sarah He works on our People Operations team in the Shanghai office. Sarah lives in Shanghai and travels to Huzhou, Zhejiang to celebrate Spring Festival with her family.',
            location: {
                center: [121.45359, 31.22813],
                zoom: 8,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [],
            onChapterExit: [
              {
                    layer: 'shanghailantern',
                    opacity: 0
                },
                {
                    layer: 'shanghailantern2',
                    opacity: 0
                },
                {
                    layer: 'shanghailantern3',
                    opacity: 0
                }
            ]
        },
        {
            id: '7',
            title: '',
            image: 'images/sarah-temple.png',
            description: '“My family visits temple every Chinese new year. We burn incense and worship Buddha. Last year, my mom saw her colleague in the temple working as a volunteer. She said she came to work from New Year’s eve and would work there for days to accompany her son-her only son commit suicide as of mental disease. She made him a memorial tablet in temple to wish him all the best in heaven.”',
            location: {
                center: [120.082218, 30.890794],
                zoom: 9,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            title: 'Celebrating in Rural China',
            image: '',
            description: 'Rural areas of China celebrate in similar ways as the big cities. They visit temples and graves of ancestors and burn paper money to welcome their ancestors home. If a loved one cannot make it home or have passed away, an extra chair will put at the table for them. Families clean, cook and play gambling games together. Whether in a big city or a rural village, the themes of the year are spending time with family and paying respects to ancestors.',
            location: {
                center: [96.561187, 33.709954],
                zoom: 5,
                pitch: 50.00,
                bearing: -10
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            title: 'Celebrating in Vietnam',
            image: '',
            description: 'In Việt Nam, the Tết festival also celebrates the new lunar new year. Similar to in China, there are lion dances, ancestor worship, temple visits, red envelope giving and, most importantly, spending time with family. Many people make great pilgrimages home to celebrate Tết with their family.',
            location: {
                center: [108.328374, 14.673278],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                   layer: 'Vietnam',
                   opacity: 1
               }
            ],
            onChapterExit: [
              {
                   layer: 'Vietnam',
                   opacity: 0
               }
            ]
        },
        {
            id: '10',
            title: 'Celebrating in Singapore',
            image: '',
            description: 'Singapore also celebrates the Spring Festival. With similar traditions as China and Vietnam, the small country has country-wide events such as Chingay Parade, River Hongbao and Chinese Festival of Arts. During the family reunion dinner, Singaporeans eat hot pot, a hot soup that’s placed in the middle with other thinly slides meats, dumplings, and vegetables that are thrown inside the pot to cook.',
            location: {
                center: [103.798961, 1.277979],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {
                   layer: 'Singapore',
                   opacity: 1
               },
               {
                    layer: 'Singapore-fill',
                    opacity: 1
                }
            ],
            onChapterExit: [
              {
                   layer: 'Singapore',
                   opacity: 0
               },
               {
                    layer: 'Singapore-fill',
                    opacity: 0
                }
            ]
        }
    ]
};
