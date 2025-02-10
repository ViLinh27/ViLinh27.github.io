const projects = [
    {
        id:'project18',
        title: 'To Do blog application in React',
        description: 'This is a simple blog code project made in React JS',
        image:'/assets/code/react-appThumbnail.jpg',
        modalId:'',
        tags:['code'],
        link:''
    },
    {
        id:'project16',
        title: 'Drawing App in Java',
        description: 'This is a simple drawing app made in Java code',
        image:'/assets/code/javadrawingapp.jpg',
        modalId:'',
        tags:['code'],
        link:'https://github.com/ViLinh27/se450-FinalProject'
    },
    {
        id:'project7',
        title: 'Time To Talk',
        description: 'This is a visual novel game project',
        image:'/assets/timeToTalk-itchioCoverArtboard-1.png',
        modalId:'',
        tags:['code'],
        link:'https://linh-is-tibia.itch.io/time-to-talk'
    },
    {
        id:'project8',
        title: 'Cartridge Collector',
        description: 'This is a platformer game project',
        image:'/assets/code/react-appThumbnail.jpg',
        modalId:'',
        tags:['code'],
        link:'https://linh-is-tibia.itch.io/cartridge-collector'
    },
    {
        id:'project9',
        title: 'Hell Ghost',
        description: 'This is an endless runner game.',
        image:'/assets/ghost01.JPG',
        modalId:'',
        tags:['code'],
        link:'https://linh-is-tibia.itch.io/hellghost'
    },
    {
        id:'project5',
        title: 'SQL',
        description: 'I explore Sql here',
        image:'https://optim.tildacdn.one/tild6238-3035-4335-a333-306335373139/-/resize/760x/-/format/webp/IMG_3349.jpg',
        modalId:'myModal5',
        tags:['code'],
        link:''
    },
    {
        id:'project10',
        title: 'Android Notes',
        description: 'A simple android app from my Android development class',
        image:'/assets/code/android-code.jpg',
        modalId:'myModal10',
        tags:['code'],
        link:''
    },
    {
        id:'project11',
        title: 'IOS book tracker',
        description: 'A simple book tracker app from my IOS development class',
        image:'https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        modalId:'myModal11',
        tags:['code'],
        link:''
    },
    {
        id:'project12',
        title: 'Rouyn Noranda UX project',
        description: 'An exploration of the information architecture of an existing site.',
        image:'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        modalId:'myModal12',
        tags:['ux'],
        link:''
    },
    {
        id:'project13',
        title: 'UX discussion paper',
        description: 'Discussing two external papers about UX and design.',
        image:'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        modalId:'myModal13',
        tags:['ux'],
        link:''
    },
    {
        id:'project14',
        title: 'PeezyFind',
        description: 'A mobile application concept.',
        image:'/assets/ux/peezyFindMoodboard.jpg',
        modalId:'myModal14',
        tags:['ux'],
        link:''
    },
    {
        id:'project1',
        title: 'fan art',
        description: 'This is the fan art gallery',
        image:'https://pbs.twimg.com/media/FqjphO0WYAMtdu2?format=jpg&name=4096x4096',
        modalId:'myModal1',
        tags:['art'],
        link:''
    },
    {
        id:'project2',
        title: 'Public Figure Portraits',
        description: 'This is the portrait gallery of real people.',
        image:'https://pbs.twimg.com/media/FiMjNK_WYAAWmls?format=jpg&name=medium',
        modalId:'myModal2',
        tags:['art'],
        link:''
    },
    {
        id:'project3',
        title: 'Original Characters',
        description: 'This is where my original characters are.',
        image:'https://pbs.twimg.com/media/FhtpuF5XkAAynEm?format=jpg&name=medium',
        modalId:'myModal3',
        tags:['art'],
        link:''
    },
    {
        id:'project4',
        title: 'DTIYS Challenges',
        description: 'Instagram will often have drawing challenges. This is a gallery of them.',
        image:'https://pbs.twimg.com/media/FX1X4vVVsAQnkPa?format=jpg&name=medium',
        modalId:'myModal4',
        tags:['art'],
        link:''
    },
    {
        id:'project15',
        title: 'Concept Collaboration Project',
        description: 'Collaborate on a film concept project',
        image:'/assets/art/ella-collab/kitchen.jpg',
        modalId:'myModal15',
        tags:['art'],
        link:''
    },
    {
        id:'project17',
        title: 'Layouts and Backgrounds',
        description: 'Environments drawn in different styles.',
        image:'/assets/art/layouts/layout5.jpg',
        modalId:'myModal17',
        tags:['art'],
        link:''
    },
    /*{
        id:'',
        title: '',
        description: '',
        image:'',
        modalId:'',
        tags:[''],
        link:''
    }*/
];

const modals = [
    {
        id: 'myModal1',
        title: 'Fan Art',
        images:[
            {
                src:'https://pbs.twimg.com/media/FVPnDX1WIAMP1vt?format=jpg&name=large',
                alt:'me but show',
                caption:'Different show styles'
            },
            {
                src:'/assets/art/fanart/theuden2-webtoon.jpg',
                alt:'isran',
                caption:'Theuden in the rain'
            },
            {
                src:'https://pbs.twimg.com/media/FQGaDjGWUAseXdC?format=png&name=900x900',
                alt:'owl house card',
                caption:'Owl House Tarot: Hunter'
            },
            {
                src:'https://pbs.twimg.com/media/FhEwQA1XkAMRFEX?format=jpg&name=medium',
                alt:'acnh bunny aro',
                caption:'The Constellation Witch - Animal Crossing'
            },
            {
                src:'/assets/art/fanart/isran-webtoon.jpg',
                alt:'isran',
                caption:'Isran but animal crossing'
            },
            {
                src:'/assets/art/fanart/theuden3-webtoon.jpg',
                alt:'isran',
                caption:'Theuden but animal crossing'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal2',
        title:'Public Figure Portraits',
        images:[
            {
                src:'https://64.media.tumblr.com/65dab7131d743e756a8252a7d71fc523/2dda13b65f6834c4-0b/s1280x1920/f02f116e2a8c70a1ddbe97657d2367cf0b9e2a71.pnj',
                alt:'Amazin Le Thi',
                caption:'Amazin Le Thi'
            },
            {
                src:'https://64.media.tumblr.com/0285f58a8bf3d6ca9a7b047f2c8ef80c/2dda13b65f6834c4-39/s1280x1920/bc037f4905054066830b15e29f9a05d7a0301d8e.pnj',
                alt:'Kevin Kreider',
                caption:'Kevin Kreider'
            },
            {
                src:'https://64.media.tumblr.com/cf4ca6ca18d889cc795278f7f1af42ec/2dda13b65f6834c4-f6/s1280x1920/a7671c84f9566320e92bd479fc952b342936261e.pnj',
                alt:'Oscar Isaac',
                caption:'Oscar Isaac'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal3',
        title:'Original Characters',
        images:[
            {
                src:'https://pbs.twimg.com/media/FgXTfecXgA0L2Rk?format=jpg&name=medium',
                alt:'Zolin',
                caption:'Zolin'
            },
            {
                src:'https://pbs.twimg.com/media/FgXTfebXgAI2_Jt?format=jpg&name=medium',
                alt:'Beatriz',
                caption:'Beatriz'
            },
            {
                src:'https://pbs.twimg.com/media/FgXTfedWYAEUk3E?format=jpg&name=medium',
                alt:'Erdutza',
                caption:'Erdutza'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal4',
        title:'DTIYS',
        images:[
            {
                src:'https://64.media.tumblr.com/09d6bf531f7513fab4d950080b133834/c0bfb20c65b25ea2-eb/s1280x1920/06453f0ba0305c6d19e4596887c38a9a2fcf7565.pnj',
                alt:'silka',
                caption:'Original subject by silka.art on Instagram'
            },
            {
                src:'https://64.media.tumblr.com/1e26be774ca115516055d40247278ba8/c0bfb20c65b25ea2-9b/s1280x1920/ba8598291a5491d4c2ba1539927ac360b7b5a048.pnj',
                alt:'bellebubben',
                caption:'Original subject by bellebubben on instagram'
            },
            {
                src:'https://64.media.tumblr.com/47e83b72a97ef65f359fd303e27ccaf1/c0bfb20c65b25ea2-bc/s1280x1920/b4d0f84ccabaa35e83ec5baae07b1bdce3f8a95e.pnj',
                alt:'cookysparks',
                caption:'Original subject by cookysparks on instagram'
            },
            {
                src:'https://64.media.tumblr.com/b20a63f116088d533e6698b601f8479b/c0bfb20c65b25ea2-97/s1280x1920/4f60ee2b6ccaef7f717f9d71d0ba32035df86ea5.pnj',
                alt:'cyarine',
                caption:'Original subject by cyarine on instagram'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal5',
        title:'SQL',
        images:[
            {
                src:'/assets/code/relationalModel-SQLproj.JPG',
                alt:'Relational model',
                caption:''
            },
            {//this one has only text so check this one with the links
                src:'',
                alt:'',
                caption:''
            },
            {
                src:'/assets/code/simpeSQLcode.JPG',
                alt:'',
                caption:''
            },
            {
                src:'/assets/code/intermediateSQLcode.JPG',
                alt:'',
                caption:''
            }
            //this modal has a footer with a link see how that works in this
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal10',
        title:'Android Notes App',
        images:[
            {
                src:'/assets/code/android-app.jpg',
                alt:'screenshot',
                caption:'App Screenshot'
            },
            {
                src:'',
                alt:'',
                caption:''
            }//this modal has a footer with a link see how that works in this
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal11',
        title:'IOS Book tracker App',
        images:[

            {
                src:'/assets/code/iosbookapp01.jpg',
                alt:'os screenshot',
                caption:'App Screenshot'
            },
            {
                src:'/assets/code/iosbookapp02.jpg',
                alt:'ios screenshot',
                caption:'App Screenshot'
            },
            {
                src:'/assets/code/iosbookapp03.jpg',
                alt:'ios screenshot',
                caption:'App Screenshot'
            },
            {
                src:'',
                alt:'',
                caption:''
            }//this modal has a footer with a link see how that works in this
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal12',
        title:"An Exploration of Rouyn Noranda's website",
        images:[
            {
                src:'/assets/ux/rouyn-site.jpg',
                alt:'website screenshot',
                caption:'Existing original website'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },//this modal has a footer with a link see how that works in this
    {
        id:'myModal13',
        title:'UX Discussion',
        images:[
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },//this modal has a footer with a link see how that works in this
    {
        id:'myModal14',
        title:'PeezyFind',
        images:[
            {
                type: 'text',
                content:
                `
                    <button><a href="/assets/ux/HCI430-A3_Group3.pdf">Download PDF</a></button>

                    <br/>
                    <h3>Idea and Introduction</h3>
                    <p>
                        The availability of public bathrooms for tourists and locals is not always obvious in major cities like Chicago. The
                        existing mobile applications do not always have the most updated location despite having other details like keys,
                        cleanliness, and accessibility information. This product will focus on providing the most accurate, detailed, and
                        extensive list of public restrooms in any city. The PeezyFind mobile and smart watch application will include maps and
                        augmented reality to aid the user in finding the most efficient way to the nearest public restroom.
                    </p>
                `
            },
            {
                type: 'text',
                content:
                `
                    <h3>
                    Sketches during Charette
                    </h3>
                    <p>
                    The sketches below provide a visual to the ideation and design charette phase of product development. The primary
                    focus
                    was on the augmented reality functionality therefore, a mobile phone interface was the first one that was considered.
                    After developing the mobile interface sketches, the addition of a smart watch interface became a simple integration.
                    Current mobile map applications have an option of also using a smart watch for navigation. Figure 2.0 details sketches
                    for the added smart watch interface.
                    
                    An obstacle that came up during the sketching portion of the charette was whether our product would need a profile and
                    log in feature (illustrated in Figure 1.2). There is a bigger convenience to the user not needing to log in to search
                    public restrooms in their area, so Figure 3.0 focuses on that user situation.
                    </p>
                `
            },
            {
                type: 'slideshow',
                slides:[
                    {
                        src: '/assets/ux/peezyfind-sketches/sketch-10.jpg',
                        caption: 'Figure 1.0'
                    },
                    {
                        src: '/assets/ux/peezyfind-sketches/sketch-11.jpg',
                        caption: 'Figure 1.1'
                    },
                    {
                        src: '/assets/ux/peezyfind-sketches/sketch12.jpg',
                        caption: 'Figure 1.2'
                    },
                    {
                        src: '/assets/ux/peezyfind-sketches/sketch20.jpg',
                        caption: 'Figure 2.0'
                    },
                    {
                        src: '/assets/ux/peezyfind-sketches/sketch30.jpg',
                        caption: 'Figure 3.0'
                    }
                ]
            },
            {
                type:'table',
                content:
                `
                <h3>Personas</h3>
                    <table>
                        <tr>
                        <th>Name:</th>
                        <td>Eden</td>
                        </tr>
                        <tr>
                        <th>Tagline:</th>
                        <td>
                            “What would be the easiest way to make sure everyone is on the same page, so I don't have to do as much?”
                        </td>
                        </tr>
                        <tr>
                        <th>Background:</th>
                        <td>
                        <ul>
                            <li>Age:26</li>
                            <li>Sex: Female</li>
                            <li>User Role: Local</li>
                        </ul>
                        </td>
                    </tr>
                    <tr>
                <th>Goals:</th>
                <td>Balance familial responsibilities with personal responsibilities.</td>
              </tr>
              <tr>
                <th>Frustration Points:</th>
                <td>
                  <ul>
                    <li>
                      Prefers alone time so big gatherings can be socially exhausting
                    </li>
                    <li>
                      Prefers to stick to an itinerary so unpredictability can be a source of
                      anxiety.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Narrative:</th>
                <td>
                  Eden has family from out of town coming over and wants to take them sightseeing, but it is going to be a large
                  gathering, so she wants to make sure there is a convenient way to keep the day trip going smoothly. Large family
                  gatherings often means that there is going to be a good number of kids involved so their parents must know the quickest
                  way to the toilet when going out as a family to help with inevitable messes.
                </td>
              </tr>
                    </table>
                    <caption>Table 1: Eden Persona</caption>
                `
            }
            {
                type: 'table',
                content: 
                `
                    <table>
              <tr>
                <th>Name:</th>
                <td>Jessica</td>
              </tr>
              <tr>
                <th>Tagline:</th>
                <td>"Exploring the Windy City, one restroom at a time!"</td>
              </tr>
              <tr>
                <th>Background:</th>
                <td>
                  <ul>
                    <li>Age:32</li>
                    <li>Sex: Female</li>
                    <li>User Role: Tourist</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Goals:</th>
                <td>
                  <ul>
                    <li>Jessica wants to see Chicago without being concerned about finding a restroom. She plans to visit a variety of
                      restaurants and sites to get the most out of her trip.</li>
                    <li>She wants a way to easily locate restrooms so she can spend less time looking and more time sightseeing.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Frustration Points:</th>
                <td>
                  <ul>
                    <li>Jessica has tried restroom locator apps before, but they frequently provide outdated information that causes annoyance
                    and time loss.</li>
                    <li>Jessica wishes there were a more straightforward way to locate r Table 2: Jessica Persona</li>
                    <li>Needs restrooms fast because she occasionally has trouble navigating in a new city.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Narrative:</th>
                <td>
                  A 32-year-old marketing manager from New York City visiting Chicago alone encounters the usual difficulty of locating a
                  clean, convenient public restroom in the busy city. Jessica gets the PeezyFinder app because she is fed up with how
                  inaccurate other toilet applications are. With this device, she moves across Chicago with ease, discovering its
                  attractions, sampling the cuisine, and easily finding clean, accessible restrooms. Her journey is now more joyful and
                  worry-free, and she leaves with beautiful memories and a renewed respect for PeezyFinder, which she heartily suggests to
                  other travelers.
                </td>
              </tr>
            </table>
                <br/>
                <caption>Table 2: Jessica Persona</caption>
                `
            },
            {
                type:'list',
                listType:'ol',
                items:[
                    `
                        Eden, a local, helps lead a sightseeing day trip with their family and wants to make sure everyone knows how to get to
                        the nearest public restroom with ease.`,
                    `
                        Jessica, a tourist, finds restrooms in Chicago with PeezyFinder.
                    `
                ]
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },//this modal has a footer with a link see how that works in this
    {
        id:'myModal15',
        title:'Chili Concept Collaboration',
        images:[
            {
                src:'/assets/art/ella-collab/chili-board.jpg',
                alt:'chili board',
                caption:'Chili board'
            },
            {
                src:'/assets/art/ella-collab/foottown.jpg',
                alt:'food town',
                caption:'food town'
            },
            {
                src:'/assets/art/ella-collab/kitchen.jpg',
                alt:'kitchen',
                caption:'kitchen concept'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    },
    {
        id:'myModal17',
        title:'Layouts Projects',
        images:[
            {
                src:'/assets/art/layouts/layout1.jpg',
                alt:'woods',
                caption:'woods'
            },
            {
                src:'/assets/art/layouts/layout2.jpg',
                alt:'woods 2',
                caption:'Woods 2'
            },
            {
                src:'/assets/art/layouts/layout3.jpg',
                alt:'cliffside',
                caption:'cliffside'
            },
            {
                src:'/assets/art/layouts/layout4.jpg',
                alt:'sunset',
                caption:'sunset'
            },
            {
                src:'/assets/art/layouts/layout5.jpg',
                alt:'night time',
                caption:'night time'
            }
            /*
            {
                src:'',
                alt:'',
                caption:''
            }
             */
        ]
    }
    /*
    {
        id:,
        title:,
        images:[]
    }
    */
];