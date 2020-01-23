var config = {
    style: 'mapbox://styles/mzdraper/ck5h6h3ma04vf1io8nbon7fuo',
    accessToken: 'pk.eyJ1IjoibXpkcmFwZXIiLCJhIjoiY2swcjVmOGUzMDFocTNjbzJmaWFpcGRoeCJ9.itsbJ9Kyqu5ENnaFaQQASw',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: '春节快乐！',
    subtitle: '跟 Mapbox 中国团队一起庆祝农历新年',
    byline: '',
    footer: '',
    chapters: [
        {
            id: '1',
            title: 'Mapbox 中国团队',
            image: 'images/china-team-party.jpeg',
            description: '对每个中国人来说，春节是一年中最重要的节日。2020 年，法定的农历新年假期是从 1 月 24 日（除夕）到 1 月 30 日（大年初六）。春运就发生在这段时间的前后，涉及到十几亿人次，如同世界上最大的迁徙运动。放鞭炮、挂春联、走亲戚，“回家过年”是中国人心中，最重要的事情。无论今年你是否如约到家，都希望你可以好好过一个春节，迎来新年的新气象。下面就跟着这张喜庆的地图故事，让 Mapbox 陪你一起来迎接新年的脚步。Chinese New Year is the most important festival for Chinese people. In 2020, we will celebrate from 1/24(New Year’s Eve) to 1/30, just like Christmas, there will be a heavy migration before New Year’s Eve, it may starts one week before New Year’s Eve, people working and living in metropolitan areas like Beijing, Shanghai, Guangzhou and go back to hometown and celebrate New Year’s Eve with their big family together. There are also superstitions people follow, such as lighting firecrackers to scare away evil spirits and not bathing on the New Years Day so you don’t wash away your luck!',
            location: {
                center: [83.526486, 43.993340],
                zoom: 3,
                pitch: 0,
                bearing: 0
            }
        },
        {
            id: '2',
            title: '在北京过春节',
            image: '',
            description: '首都北京是拥有三千多年历史，融合古代和现代文明的文化古都，政治、商业和技术枢纽。2100万北京居民在农历新年期间的传统文化节目有庙会、舞狮和节日美食等娱乐活动。Over 3 millennia old, Beijing combines ancient and modern architecture to represent the city’s cultural significance and impact as a hub for politics, business and technology. It is now the capital of the People’s Republic of China and home to over 21 million residents. During Chinese New Year, Beijing hosts Temple Fairs where visitors welcome the new year by paying respects to ancestors and enjoy entertainment such as lion dancing and festival food.',
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
            description: 'Kevin Li 是 Mapbox 中国的安卓开发经理，Base 在 Mapbox 北京办公室，将会在春节期间返回老家 —— 山东青岛和家人一同庆祝新春佳节。Kevin Li is an Android Engineering Manager for on our China team. Kevin lives in Beijing and travels to Qingdao, Shandong for Spring Festival.',
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
            title: '青岛, 山东',
            image: 'images/kevin-firecracker.jpeg',
            description: '“我们会在大年30的傍晚放鞭炮迎接祖宗回家过年，代表过年的开始。晚饭全家一起吃一顿丰盛的年夜饭。半夜12点的时候要过午更，这时需要再放一次鞭炮并下饺子吃，也是各家放焰火最多的时刻。大年初一的早上还要放一次鞭炮，寓意开门红，之后大家会走街串巷进行拜年。正月初二傍晚会放第四次鞭炮，送走祖宗，代表这次过年结束。”"We will set off firecrackers in the Chinese New Year\'s Eve to greet our ancestors to go home to celebrate Chinese New Year, which represents the beginning of the New Year. The family has a hearty dinner together. At 12 a.m middle night, we will set off firecrackers and eat dumplings again. In the evening of new year’s second day, a fourth firecracker will be set off and the ancestors will be sent away, representing the end of the Chinese New Year."',
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
            title: '在上海过春节',
            image: '',
            description: '上海最初是一个位于长江口南部的渔村，现在是中国人口最多的城市，人口超过 2400 万，是创新技术，金融和交通运输的中心。在元宵节的上海豫园，人们举着花灯，猜着灯谜，吃着汤圆，在这里与家人和朋友一起享受欢乐时光。Originally a fishing village located on the southern estuary of the Yangtze River, Shanghai is now the most populous city in China with over 24 million residents and an epicenter for innovative technology, finance and transportation. Shanghai\'s Yuyuan Lantern Festival is a time for people to celebrate by sending up flying lanterns, have a meal of Tangyuan, and enjoy time together with family and friends in parks and answering lantern riddles.',
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
            description: 'Sarah He 负责 Mapbox 中国的 People Operations 工作，平时在上海工作，今年春节，Sarah 回到家乡 —— 浙江湖州与亲人团聚。Sarah He works on our People Operations team team in the Shanghai office. Sarah lives in Shanghai and travels to Huzhou, Zhejiang to celebrate Spring Festival with her family.',
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
            description: '“我的家人每逢农历新年都会去寺庙烧香拜佛。去年，我妈妈看到她在庙里的同事当志愿者，她除夕的时候就来了，打算在那里工作几天以陪伴儿子——她唯一的儿子因精神疾病自杀。她在庙里给他做了一个纪念碑，祝他在天堂一切顺利。”“My family visits temple every Chinese new year. We burn incense and worship Buddha. Last year, my mom saw her colleague in the temple working as a volunteer. She said she came to work from New Year’s eve and would work there for days to accompany her son-her only son commit suicide as of mental disease. She made him a memorial tablet in temple to wish him all the best in heaven.”',
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
            title: '其实，年味更浓的是自己的家乡……',
            image: '',
            description: '在家乡过年，每个人都会有不尽然相同的习俗，比如去祭祀祖先。最开心的就是和家人一起大扫除、做年夜饭、打麻将/扑克。Rural areas of China celebrate in similar ways as the big cities. They visit temples and graves of ancestors and burn paper money to welcome their ancestors home. If a loved one cannot make it home or have passed away, an extra chair will put at the table for them. Families clean, cook and play gambling games together. Whether in a big city or a rural village, the themes of the year are spending time with family and paying respects to ancestors.',
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
            title: '中国春节在越南',
            image: '',
            description: '在越南，Tết festival 也会庆祝农历新年。与中国类似，这里有舞狮，祭祖，庙会，包红包，最重要的也是与家人共度时光。In Việt Nam, the Tết festival also celebrates the new lunar new year. Similar to in China, there are lion dances, ancestor worship, temple visits, red envelope giving and, most importantly, spending time with family. Many people make great pilgrimages home to celebrate Tết with their family.',
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
            title: '中国春节在新加坡',
            image: '',
            description: '除了越南，新加坡也会庆祝春节。在全国范围内举办大型活动，有一些我们很少听过的项目，比如成吉游行，红宝河和中国艺术节。在家庭团圆饭中，新加坡最爱吃的竟然是火锅！Singapore also celebrates the Spring Festival. With similar traditions as China and Vietnam, the small country has country-wide events such as Chingay Parade, River Hongbao and Chinese Festival of Arts. During the family reunion dinner, Singaporeans eat hot pot, a hot soup that’s placed in the middle with other thinly slides meats, dumplings, and vegetables that are thrown inside the pot to cook.',
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
