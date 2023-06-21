CREATE EXTENSION "uuid-ossp";



-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  JOBS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


truncate table jobs;
drop type JOB_TYPE cascade;
drop table jobs;

create type JOB_TYPE as enum('full-time', 'part-time', 'contract');

create table jobs(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title varchar NOT NULL,
  type JOB_TYPE NOT NULL,
  company varchar NOT NULL,
  company_img_url varchar,
  company_website_url varchar,
  company_location varchar,
  company_address varchar,
  started_at TIMESTAMPTZ default NOW(),
  ended_at TIMESTAMPTZ default NOW(),
  description text
);

insert into jobs (title, type, company, company_img_url, company_website_url, company_location, company_address, started_at, ended_at, description) values
('Web Developer', 'contract', 'Clínica Laços', 
'https://camo.githubusercontent.com/c014db696d5ede8141129f9a8ea002f39411d78d47ac614ae381c79d989f5bc3/687474703a2f2f636c696e6963616c61636f732e636f6d2e62722f6173736574732f696d616765732f6c6f676f2d6c61636f732d6d656e752d312d33303078313239302e706e67',
'cliinicalacos.com.br', 'Rio de Janeiro - Brazil','Rua Desembargador Izidro, 40 Sala 203 - Tijuca - Rio de Janeiro', '2019-05-06 10:00:00.0000+00', '2020-12-18 18:00:00.0000+00', 'Clínica Laços is a Psychology clinic in Rio de Janeiro that was a pioneer in online consultations. With around 1k consultations per month, my job there was at first to create and maintain their website. Later on, they needed to optimize their processes - which were still pretty analogic at that time - so I built, tested, and maintained a Typescript/Angular/Firebase web app for their professionals to schedule and manage their patients and appointments.'
),
('Software Engineer', 'full-time', 'Versatil', 
'https://camo.githubusercontent.com/91e84231be56740f5ceb96cf20689844042989992c46db16cb82f8cb3be8fbbc/687474703a2f2f76657273617465632e636f6d2e62722f7777772f696d672f6c6f676f2d766572736174696c2d74692e706e67', 
'versatec.com.br', 'Rio de Janeiro - Brazil', 'Rua Siqueira Campos, 43 / sala 513, Copacabana Rio de Janeiro - RJ', '2020-06-01 10:00:00.0000+00', 
'2021-12-14 18:00:00.0000+00', 'At Versátil I developed B2B applications for Oi, one of the biggest telecoms companies in Brazil. They lead the market in more than 10 Brazilian state capitals, providing optical fiber to more than 200 cities. At Versátil we managed a good part of their data: Our databases stored more than 2 million entries daily, and it was up to us to manipulate all that data to come up with rich and reliable pieces of software. I have built many interactive data visualization widgets that provided business insights for their BI, management, and operations teams. The core technologies of our stack were Typescript, Angular, D3js, Postgres, and AWS'
),
('Frontend Engineer', 'full-time', 'QGiv', 
'https://camo.githubusercontent.com/e85c82ef99dd34a244f6e45c57cc80320ebad5a93fdeca466eb9c90a3109ac41/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f43344430424151467154745065784b6c6565512f636f6d70616e792d6c6f676f5f3230305f3230302f302f313633313830373531323330343f653d3231343734383336343726763d6265746126743d4a33486c366b4c52314430764c585078725249726a59663666475f483256322d6c433452427462485a4a49', 
'qgiv.com', 'Lakeland, Florida', '207 Bartow Rd, Lakeland, FL 33801, USA', '2021-12-15 10:00:00.0000+00', '2022-06-01 18:00:00.0000+00', 'Qgiv is a web platform for nonprofit institutions to create and manage fundraising campaigns. With more than 5k entities using its services, 40K+ successful campaigns, and over 2 billion dollars processed with the help of its tools, Qgiv is a successful mid-sized company based in Florida. It was a very exciting job, and my first time working in a company with 100+ employees. With a well-structured series of processes, at Qgiv I accumulated experience on how to effectively navigate huge codebases while doing my changes in sync with a large number of developers spread across multiple teams. Our most used technologies were Javascript, React, Redux, PHP, MySQL, and JQuery.'
),
('Senior Software Engineer', 'full-time', 'Genesys', 
'https://camo.githubusercontent.com/6174db3a95b14178ebccb61b3bf6b17809bdff44961cb9316c1b31e143fd6878/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6372756e6368626173652d70726f64756374696f6e2f696d6167652f75706c6f61642f635f6c7061642c685f3235362c775f3235362c665f6175746f2c715f6175746f3a65636f2c6470725f312f76313439353831363537302f6b376d30666938373039646c61316b70616b73682e706e67', 
'genesys.com', 'Durham, North Carolina', '4307 Emperor Blvd #300, Durham, NC 27703, USA', '2022-06-02 10:00:00.0000+00', NULL, 'Genesys is the world leader in cloud contact center innovation. A large company spread across several countries with hundreds of different projects and tech teams. There I had the opportunity to fix bugs and add functionality to several projects. Some of them, like Genesys Chat, are products used by thousands of people all around the globe. The company probably has a project in every programming language, however, the codebases I’ve dealt with so far were mostly Javascript/Typescript inside frameworks like Ember, Knockout, Angular, and React/Redux.'
);

select * from jobs;

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  SKILLS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

truncate table skills;
drop table skills;
drop type SKILL_CATEGORY;

create type SKILL_CATEGORY as enum('language', 'framework', 'library', 'platform', 'database', 'tool');

create table skills (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar(60) NOT NULL,
  category SKILL_CATEGORY NOT NULL,
  -- first_used_at TIMESTAMPTZ default NOW(),
  image_url varchar,
  description text,
  level float default 6
);

insert into skills (name, category, description, image_url, level) values
('Javascript', 'language', 'The programming language I am most comfortable with. Javascript is my main weapon!','https://string7devfiles.s3.amazonaws.com/skills/javascript.svg',10),
('Css', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/css.svg',9), 
('Html', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/html5.svg',10), 
('Typescript', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/typescript.svg',9), 
('SQL', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/database.svg',8), 
('Bash', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/bash.png',5), 
('C#', 'language', 'I use C# mostly to develop games using the Unity engine', 'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png', 5),
('Python', 'language', '','https://string7devfiles.s3.amazonaws.com/skills/python.svg',4),

('MySQL', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/mysql.svg',5), 
('firestore', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/firestore.png',10), 
('MongoDB', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/mongodb.svg',6), 
('SqLite', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/sqlite.png',5),
('Postgres', 'database', 'My default choice when working with SQL databases','https://string7devfiles.s3.amazonaws.com/skills/postgres.svg',6), 
('Realtime DB', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/realtime-db.png',9), 
('redis', 'database', '','https://string7devfiles.s3.amazonaws.com/skills/redis.svg',7),

('Angular', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/angular.svg',9), 
('SolidJS', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/solid.svg',9), 
('Node', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/node.svg',7), 
('Sass', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/sass.png',9), 
('React', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/react.svg',9), 
('React Native', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/react-native.svg',7), 
('Next', 'framework', '','https://string7devfiles.s3.amazonaws.com/skills/next.svg',7),
('Unity', 'framework', 'https://companieslogo.com/img/orig/U-ea48bc1d.png?t=1634728034','https://string7devfiles.s3.amazonaws.com/skills/mamp.png',5),

('Material Design', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/material.png',9), 
('Lottie', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/lottie.png',7), 
('RxJS', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/rxjs.svg',9), 
('redux', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/redux.svg',8), 
('headless UI', 'library', '', 'https://string7devfiles.s3.amazonaws.com/skills/headlessui.svg', 7), 
('daisy UI', 'library', '', 'https://string7devfiles.s3.amazonaws.com/skills/daisyui.svg',7),
('material-ui', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/material-ui.svg',6), 
('nebular', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/nebular.png',8),
('jQuery', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/jquery.svg',7), 
('puppeteer', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/puppeteer.svg',5),
('styled components', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/styled-components.svg',8), 
('webpack', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/webpack.svg',4), 
('tailwind', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/tailwind.svg',9), 
('threejs', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/three.png',5),
('d3', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/d3.png',7), 
('Bootstrap', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/bootstrap.svg',7), 
('echarts', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/echarts.svg',9), 
('express', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/express.svg',6),
('framer motion', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/framer-motion.svg',9), 
('ngRx', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/ngrx.svg',5), 
('react query', 'library', '','https://string7devfiles.s3.amazonaws.com/skills/react-query.svg',7), 

('Git', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/git.svg',9), 
('Vite', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/vite.svg',7), 
('npm', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/npm.svg',10), 
('yarn', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/yarn.svg',8), 
('Visual Studio Code', 'tool', 'My IDE of choice','https://string7devfiles.s3.amazonaws.com/skills/vscode.png',10),
('Visual Studio', 'tool', 'My IDE of choice','https://string7devfiles.s3.amazonaws.com/skills/visual-studio.svg',5),
('Docker', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/docker.svg',4), 
('Figma', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/figma.svg',8), 
('Insomnia', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/insomnia.svg',10), 
('ChatGPT', 'tool', '','https://string7devfiles.s3.amazonaws.com/skills/chatGPT.svg',8), 

('google-cloud', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/google-cloud.svg',7), 
('gitLab', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/gitlab-tile.svg',9), 
('bitbucket', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/bitbucket.svg',9),
('firebase', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/firebase.svg',9), 
('apple', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/apple.svg',8), 
('aws', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/aws.svg',7), 
('vercel', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/vercel.svg',8), 
('gitHub', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/github.svg',8),
('stackoverflow', 'platform', '','https://string7devfiles.s3.amazonaws.com/skills/stackoverflow.svg',10);


select * from skills;

-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  PROJECTS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

truncate table projects cascade;
drop table projects cascade;

create table projects(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name varchar NOT NULL,
  site_url varchar,
  github_url varchar,
  created_at TIMESTAMPTZ default NOW(),
  updated_at TIMESTAMPTZ default NOW(),
  description text,
  main_language varchar
);


insert into projects (name, site_url, github_url, created_at, updated_at, description, main_language) values 
  ('enhanced-img', 'https://enhanced-8r8tjphza-mrchernicharo.vercel.app/', 'https://github.com/mrChernicharo/enhanced-img', '2023-06-08T20:10:14Z','2023-06-08T20:10:30Z', 'a tiny website where we handle images like a boss', 'Javascript'),
  ('image-processing',null,'https://github.com/mrChernicharo/image-processing','2023-06-08T20:10:14Z','2023-06-08T20:10:30Z','image-processing app built with nodeJS and ffmpeg','JavaScript'),
  ('image-resize',null,'https://github.com/mrChernicharo/image-resize','2023-06-07T23:46:47Z','2023-06-07T23:47:02Z','image-resize','JavaScript'),
  ('path-finder-app','https://bright-dodol-9bedc7.netlify.app/','https://github.com/mrChernicharo/path-finder-app','2023-05-26T20:20:46Z','2023-05-26T20:21:04Z','path-finder-app','TypeScript'),
  ('Mobile_Shooter',null,'https://github.com/mrChernicharo/Mobile_Shooter','2023-04-28T21:20:58Z','2023-05-01T03:46:05Z','C# Unity project','ShaderLab'),
  ('module-federation-with-vite',null,'https://github.com/mrChernicharo/module-federation-with-vite','2023-04-15T23:34:52Z','2023-04-15T23:35:09Z','module-federation-with-vite','CSS'),
  ('unity-tower-def',null,'https://github.com/mrChernicharo/unity-tower-def','2023-04-07T14:34:08Z','2023-04-07T14:34:08Z',null,null),
  ('solid-datepicker',null,'https://github.com/mrChernicharo/solid-datepicker','2022-07-21T03:46:49Z','2023-03-30T19:14:51Z','Reusable Datepicker Component for SolidJS projects','TypeScript'),
  ('semana-js-expert-07',null,'https://github.com/mrChernicharo/semana-js-expert-07','2023-03-03T00:01:58Z','2023-03-03T00:03:20Z','semana-js-expert-07','JavaScript'),
  ('ts-tower-defense',null,'https://github.com/mrChernicharo/ts-tower-defense','2023-02-24T03:06:55Z','2023-02-24T03:07:15Z','ts-tower-defense','TypeScript'),
  ('animate-enter-exit-HOC',null,'https://github.com/mrChernicharo/animate-enter-exit-HOC','2023-01-21T17:51:46Z','2023-01-21T17:52:11Z','animate-enter-exit-HOC','TypeScript'),
  ('solid-charts',null,'https://github.com/mrChernicharo/solid-charts','2022-09-29T03:48:39Z','2023-01-07T13:21:24Z',null,'TypeScript'),
  ('vanilla-tower-defender','https://aquamarine-tanuki-63c56c.netlify.app/','https://github.com/mrChernicharo/vanilla-tower-defender','2023-01-06T22:51:05Z','2023-01-06T22:51:19Z','vanilla-tower-defender','JavaScript'),
  ('react-tower-defender',null,'https://github.com/mrChernicharo/react-tower-defender','2022-12-29T16:35:01Z','2022-12-29T16:35:17Z','react-tower-defender','JavaScript'),
  ('moving-sale',null,'https://github.com/mrChernicharo/moving-sale','2022-12-08T21:37:19Z','2022-12-15T19:01:00Z','moving-sale','JavaScript'),
  ('redux-chat-js',null,'https://github.com/mrChernicharo/redux-chat-js','2022-12-07T21:40:42Z','2022-12-07T21:40:58Z','redux-chat-js','JavaScript'),
  ('redux-chat',null,'https://github.com/mrChernicharo/redux-chat','2022-12-06T04:28:46Z','2022-12-06T04:29:01Z','redux-chat','TypeScript'),
  ('async-redux',null,'https://github.com/mrChernicharo/async-redux','2022-12-01T05:14:45Z','2022-12-01T05:15:01Z','async-redux','JavaScript'),
  ('fast-react-context',null,'https://github.com/mrChernicharo/fast-react-context','2022-12-01T01:07:24Z','2022-12-01T01:07:43Z','fast-react-context','TypeScript'),
  ('solid-lacos','https://lacos-app.netlify.app','https://github.com/mrChernicharo/solid-lacos','2022-10-11T20:17:22Z','2022-10-13T22:14:06Z',null,'JavaScript'),
  ('supabase-realtime',null,'https://github.com/mrChernicharo/supabase-realtime','2022-10-08T03:21:27Z','2022-10-08T03:21:41Z',null,'JavaScript'),
  ('useTransitionValue',null,'https://github.com/mrChernicharo/useTransitionValue','2022-10-01T05:37:58Z','2022-10-01T05:38:12Z',null,'TypeScript'),
  ('frequency-spectrum',null,'https://github.com/mrChernicharo/frequency-spectrum','2022-09-28T03:57:16Z','2022-09-28T04:01:15Z','frequency spectrum graph of Vivaldi''s winter','TypeScript'),
  ('solid-ts-availability','https://elegant-malasada-dab3f9.netlify.app/','https://github.com/mrChernicharo/solid-ts-availability','2022-09-12T18:20:08Z','2022-09-12T18:20:19Z',null,'TypeScript'),
  ('pointer-primitive',null,'https://github.com/mrChernicharo/pointer-primitive','2022-09-12T05:39:21Z','2022-09-12T05:39:35Z',null,'TypeScript'),
  ('solid-week-availability',null,'https://github.com/mrChernicharo/solid-week-availability','2022-08-20T18:29:54Z','2022-08-20T18:30:14Z',null,'TypeScript'),
  ('id-maker',null,'https://github.com/mrChernicharo/id-maker','2022-07-26T14:15:00Z','2022-07-26T14:15:00Z','minimal unique ids',null),
  ('solid-date-input',null,'https://github.com/mrChernicharo/solid-date-input','2022-07-22T14:47:21Z','2022-07-22T14:47:34Z','Masked input for entering dates','JavaScript'),
  ('tailwind-templates',null,'https://github.com/mrChernicharo/tailwind-templates','2022-07-02T14:56:44Z','2022-07-02T14:56:58Z',null,'JavaScript'),
  ('solid-availability-widget','https://solid-availability-widget.vercel.app','https://github.com/mrChernicharo/solid-availability-widget','2022-06-26T21:43:54Z','2022-07-01T18:05:41Z',null,'JavaScript'),
  ('solid-tailwind-starter',null,'https://github.com/mrChernicharo/solid-tailwind-starter','2022-06-30T04:58:35Z','2022-06-30T04:58:47Z',null,'JavaScript'),
  ('solid-dropdown-menu',null,'https://github.com/mrChernicharo/solid-dropdown-menu','2022-06-29T21:53:54Z','2022-06-29T21:54:09Z',null,'JavaScript'),
  ('availability-widget-2',null,'https://github.com/mrChernicharo/availability-widget-2','2022-06-23T19:11:27Z','2022-06-23T19:11:41Z',null,'TypeScript'),
  ('resizable-div',null,'https://github.com/mrChernicharo/resizable-div','2022-06-21T13:07:19Z','2022-06-21T13:07:32Z',null,'JavaScript'),
  ('availability-widget',null,'https://github.com/mrChernicharo/availability-widget','2022-06-20T15:24:54Z','2022-06-20T15:25:10Z',null,'TypeScript'),
  ('ts-piano','https://main.d3p44sdat5tzrr.amplifyapp.com/','https://github.com/mrChernicharo/ts-piano','2022-06-10T05:21:23Z','2022-06-10T05:21:34Z',null,'TypeScript'),
  ('js-piano',null,'https://github.com/mrChernicharo/js-piano','2022-06-08T18:17:15Z','2022-06-08T18:18:05Z',null,'TypeScript'),
  ('scale-circle',null,'https://github.com/mrChernicharo/scale-circle','2022-06-05T04:10:28Z','2022-06-05T04:11:33Z',null,'TypeScript'),
  ('next-unigranrio-motors','next-unigranrio-motors-nwtcwn312-mrchernicharo.vercel.app','https://github.com/mrChernicharo/next-unigranrio-motors','2022-05-26T23:54:10Z','2022-06-01T21:12:18Z',null,'TypeScript'),
  ('Privacy-Notice',null,'https://github.com/mrChernicharo/Privacy-Notice','2022-05-21T16:23:13Z','2022-05-21T16:23:57Z',null,'HTML'),
  ('my-calculator',null,'https://github.com/mrChernicharo/my-calculator','2022-05-17T21:27:53Z','2022-05-17T21:28:16Z',null,'JavaScript'),
  ('ReactTSFormWithYupNoFormik',null,'https://github.com/mrChernicharo/ReactTSFormWithYupNoFormik','2022-05-12T21:36:50Z','2022-05-12T21:37:06Z',null,'TypeScript'),
  ('unigranrio-coleta-e','unigranrio-coleta-eowoc7zp3-mrchernicharo.vercel.app','https://github.com/mrChernicharo/unigranrio-coleta-e','2022-04-20T02:51:43Z','2022-04-27T17:52:06Z',null,'TypeScript'),
  ('unigranrio-coleta-app',null,'https://github.com/mrChernicharo/unigranrio-coleta-app','2022-04-03T18:04:26Z','2022-04-18T22:20:53Z',null,'JavaScript'),
  ('mrChernicharo',null,'https://github.com/mrChernicharo/mrChernicharo','2022-04-10T19:37:26Z','2022-04-10T19:37:26Z',null,null),
  ('basic-chat-app',null,'https://github.com/mrChernicharo/basic-chat-app','2022-03-30T01:08:16Z','2022-03-30T01:08:37Z','node.js | socket.io','JavaScript'),
  ('ez-chat',null,'https://github.com/mrChernicharo/ez-chat','2022-03-29T04:36:13Z','2022-03-29T04:36:27Z','node | express | socket.io ','JavaScript'),
  ('d3-electrorating','https://mrchernicharo.github.io/d3-electrorating/no-financieros.html','https://github.com/mrChernicharo/d3-electrorating','2021-12-05T22:00:24Z','2022-03-26T19:48:27Z',null,'JavaScript'),
  ('api-scafold',null,'https://github.com/mrChernicharo/api-scafold','2022-03-21T22:06:58Z','2022-03-21T22:07:17Z',null,'JavaScript'),
  ('node-mysql-connection',null,'https://github.com/mrChernicharo/node-mysql-connection','2022-03-21T04:57:28Z','2022-03-21T04:58:13Z',null,'JavaScript'),
  ('chat-app',null,'https://github.com/mrChernicharo/chat-app','2022-03-16T03:18:58Z','2022-03-16T23:24:34Z','typescript | node | react | socket.io','TypeScript'),
  ('cherni-api',null,'https://github.com/mrChernicharo/cherni-api','2022-03-14T03:10:32Z','2022-03-14T03:10:53Z',null,'TypeScript'),
  ('ignite-database-queries',null,'https://github.com/mrChernicharo/ignite-database-queries','2022-03-11T23:03:11Z','2022-03-11T23:03:15Z',null,'TypeScript'),
  ('ignite-node-SOLID',null,'https://github.com/mrChernicharo/ignite-node-SOLID','2022-03-06T22:35:59Z','2022-03-06T22:37:23Z',null,'TypeScript'),
  ('ts-unigranrio-motors','https://main.d24njz4097noi5.amplifyapp.com/','https://github.com/mrChernicharo/ts-unigranrio-motors','2022-03-01T04:55:36Z','2022-03-01T04:55:48Z',null,'TypeScript'),
  ('ts-yup-formik',null,'https://github.com/mrChernicharo/ts-yup-formik','2022-02-23T01:07:03Z','2022-02-23T01:07:19Z',null,'TypeScript'),
  ('redux-formik',null,'https://github.com/mrChernicharo/redux-formik','2022-02-19T05:11:24Z','2022-02-19T05:14:18Z',null,'JavaScript'),
  ('full-stack-mel-da-terra',null,'https://github.com/mrChernicharo/full-stack-mel-da-terra','2022-01-27T01:47:06Z','2022-01-27T01:48:37Z',null,'TypeScript'),
  ('d3-arcs',null,'https://github.com/mrChernicharo/d3-arcs','2021-12-07T16:23:02Z','2021-12-14T10:33:24Z',null,'HTML'),
  ('d3-treemaps',null,'https://github.com/mrChernicharo/d3-treemaps','2021-12-04T02:27:48Z','2021-12-05T19:00:10Z',null,'HTML'),
  ('react-query-dowhile',null,'https://github.com/mrChernicharo/react-query-dowhile','2021-12-02T17:50:35Z','2021-12-02T17:58:07Z',null,'JavaScript'),
  ('d3-udemy-ideas',null,'https://github.com/mrChernicharo/d3-udemy-ideas','2021-12-02T04:15:15Z','2021-12-02T04:30:34Z',null,'JavaScript'),
  ('d3-data',null,'https://github.com/mrChernicharo/d3-data','2021-12-01T23:37:17Z','2021-12-02T03:49:26Z',null,'JavaScript'),
  ('snack-shack',null,'https://github.com/mrChernicharo/snack-shack','2021-11-30T23:44:53Z','2021-11-30T23:48:50Z',null,'TypeScript'),
  ('melo-dev-portfolio-v2','https://melodev.link','https://github.com/mrChernicharo/melo-dev-portfolio-v2','2021-10-05T01:24:16Z','2021-11-30T05:16:39Z',null,'TypeScript'),
  ('angular-schedulers',null,'https://github.com/mrChernicharo/angular-schedulers','2021-11-30T04:57:05Z','2021-11-30T04:57:24Z',null,'TypeScript'),
  ('DefinitelyTyped',null,'https://github.com/mrChernicharo/DefinitelyTyped','2021-11-25T01:34:59Z','2021-11-25T01:35:00Z','The repository for high quality TypeScript type definitions.',null),
  ('curriculum',null,'https://github.com/mrChernicharo/curriculum','2021-03-02T01:33:25Z','2021-11-07T19:13:25Z',null,'HTML'),
  ('algorithms-data-structures',null,'https://github.com/mrChernicharo/algorithms-data-structures','2021-06-20T06:37:45Z','2021-11-04T05:13:26Z',null,'JavaScript'),
  ('svg-waves',null,'https://github.com/mrChernicharo/svg-waves','2021-10-18T20:44:12Z','2021-10-20T12:47:54Z',null,'TypeScript'),
  ('melo-dev-portfolio',null,'https://github.com/mrChernicharo/melo-dev-portfolio','2021-09-24T20:43:20Z','2021-10-12T17:17:52Z',null,'TypeScript'),
  ('capoeira',null,'https://github.com/mrChernicharo/capoeira','2021-10-03T15:51:27Z','2021-10-03T15:53:19Z',null,'TypeScript'),
  ('d3-charts','https://main.didxcis265emq.amplifyapp.com/stacked-area','https://github.com/mrChernicharo/d3-charts','2021-06-10T22:27:04Z','2021-09-30T23:12:12Z',null,'TypeScript'),
  ('vite-boilerplate-react-express-storybook',null,'https://github.com/mrChernicharo/vite-boilerplate-react-express-storybook','2021-09-29T00:30:14Z','2021-09-29T00:30:18Z',null,'TypeScript'),
  ('mel-da-terra-mobile',null,'https://github.com/mrChernicharo/mel-da-terra-mobile','2021-09-01T02:27:03Z','2021-09-13T21:10:38Z',null,'TypeScript'),
  ('mel-da-terra-web',null,'https://github.com/mrChernicharo/mel-da-terra-web','2021-09-08T14:31:14Z','2021-09-08T14:33:31Z',null,'CSS'),
  ('ts-map','https://main.d2797vtjwvpw5j.amplifyapp.com/','https://github.com/mrChernicharo/ts-map','2021-07-30T07:10:12Z','2021-08-29T05:56:23Z',null,'TypeScript'),
  ('world-data-viz',null,'https://github.com/mrChernicharo/world-data-viz','2021-08-24T15:04:51Z','2021-08-26T05:28:50Z',null,'TypeScript'),
  ('world-visualizations',null,'https://github.com/mrChernicharo/world-visualizations','2021-07-19T23:51:19Z','2021-08-23T20:09:24Z',null,'TypeScript'),
  ('ts-three',null,'https://github.com/mrChernicharo/ts-three','2021-07-28T22:10:16Z','2021-07-29T04:43:39Z',null,'TypeScript'),
  ('three-js-book',null,'https://github.com/mrChernicharo/three-js-book','2021-07-14T04:31:27Z','2021-07-27T23:16:14Z',null,'JavaScript'),
  ('p5js-nature-of-code',null,'https://github.com/mrChernicharo/p5js-nature-of-code','2021-07-22T21:40:27Z','2021-07-26T20:51:21Z',null,'JavaScript'),
  ('ts-zustand-todo',null,'https://github.com/mrChernicharo/ts-zustand-todo','2021-07-22T02:58:46Z','2021-07-22T03:28:01Z',null,'TypeScript'),
  ('next-poke-api',null,'https://github.com/mrChernicharo/next-poke-api','2021-07-19T03:05:12Z','2021-07-19T03:05:30Z',null,'TypeScript'),
  ('nextjs-boilerplate',null,'https://github.com/mrChernicharo/nextjs-boilerplate','2021-07-15T06:07:26Z','2021-07-15T06:08:55Z',null,'JavaScript'),
  ('fireship-tests',null,'https://github.com/mrChernicharo/fireship-tests','2021-06-07T14:02:19Z','2021-06-07T15:56:58Z',null,'TypeScript'),
  ('aws-crud-instruments-app',null,'https://github.com/mrChernicharo/aws-crud-instruments-app','2021-06-05T05:53:17Z','2021-06-06T06:16:07Z','react AWS crud app','TypeScript'),
  ('aws-basic-web-app',null,'https://github.com/mrChernicharo/aws-basic-web-app','2021-06-03T03:00:15Z','2021-06-03T03:00:50Z',null,'HTML'),
  ('clubhouse-clone-app',null,'https://github.com/mrChernicharo/clubhouse-clone-app','2021-05-25T00:50:14Z','2021-05-25T03:54:06Z','advanced node, websockets and more...','JavaScript'),
  ('unigranrio-calcula-salario',null,'https://github.com/mrChernicharo/unigranrio-calcula-salario','2021-05-19T15:22:44Z','2021-05-20T23:07:06Z','React Native App - Calculate your Salary, know how much taxes your are paying ','TypeScript'),
  ('unigranrio-peso-ideal',null,'https://github.com/mrChernicharo/unigranrio-peso-ideal','2021-05-18T22:02:48Z','2021-05-20T23:05:39Z','React Native app - Get to know what''s your ideal weight and get in shape!','TypeScript'),
  ('D3-tests',null,'https://github.com/mrChernicharo/D3-tests','2020-08-20T21:42:32Z','2021-05-12T16:01:55Z','Experimentos de visualização de dados com D3','JavaScript'),
  ('video-to-gif-converter',null,'https://github.com/mrChernicharo/video-to-gif-converter','2021-05-01T20:53:29Z','2021-05-01T20:53:44Z','webassembly app','CSS'),
  ('happy-plants',null,'https://github.com/mrChernicharo/happy-plants','2021-04-19T23:09:58Z','2021-04-24T02:27:22Z','react native app inspired by Rocketseat''s NLW#5','TypeScript'),
  ('expo-test',null,'https://github.com/mrChernicharo/expo-test','2021-04-19T02:21:25Z','2021-04-19T02:21:49Z',null,'TypeScript'),
  ('websockets',null,'https://github.com/mrChernicharo/websockets','2021-04-14T22:46:52Z','2021-04-14T22:48:45Z',null,'HTML'),
  ('next-portfolio','next-portfolio-94d7dco85-mrchernicharo.vercel.app','https://github.com/mrChernicharo/next-portfolio','2021-04-04T03:46:16Z','2021-04-14T13:27:16Z',null,'TypeScript'),
  ('vue-hello-world',null,'https://github.com/mrChernicharo/vue-hello-world','2021-03-31T19:54:08Z','2021-03-31T19:54:50Z',null,'HTML'),
  ('app-mel-da-terra-verde','	https://mel-da-terra-verde-app.web.app/produtos','https://github.com/mrChernicharo/app-mel-da-terra-verde','2020-12-03T04:04:15Z','2021-03-31T04:06:11Z',null,'TypeScript'),
  ('js-tests',null,'https://github.com/mrChernicharo/js-tests','2021-02-12T04:21:39Z','2021-03-31T03:23:48Z',null,'JavaScript'),
  ('NLW-4-next',null,'https://github.com/mrChernicharo/NLW-4-next','2021-02-24T15:26:47Z','2021-03-28T21:01:54Z',null,'TypeScript'),
  ('next-beat2',null,'https://github.com/mrChernicharo/next-beat2','2021-02-05T20:31:23Z','2021-03-22T05:03:37Z',null,'TypeScript'),
  ('angular-portfolio',null,'https://github.com/mrChernicharo/angular-portfolio','2020-10-22T01:53:26Z','2021-03-21T04:55:07Z',null,'TypeScript'),
  ('d3',null,'https://github.com/mrChernicharo/d3','2020-08-25T14:00:16Z','2021-03-12T16:00:48Z','SVG studies. Chart and graph renderings','JavaScript'),
  ('ignite-react-01-github-explorer',null,'https://github.com/mrChernicharo/ignite-react-01-github-explorer','2021-03-11T18:23:39Z','2021-03-12T00:54:58Z',null,'JavaScript'),
  ('ignite-node-03-code-correction',null,'https://github.com/mrChernicharo/ignite-node-03-code-correction','2021-03-11T01:09:53Z','2021-03-11T17:48:24Z',null,'JavaScript'),
  ('ignite-node-02-todos-app-middleware',null,'https://github.com/mrChernicharo/ignite-node-02-todos-app-middleware','2021-03-10T22:05:06Z','2021-03-11T01:05:21Z',null,'JavaScript'),
  ('ignite-node-todos-app',null,'https://github.com/mrChernicharo/ignite-node-todos-app','2021-03-10T16:28:28Z','2021-03-10T22:01:44Z',null,'JavaScript'),
  ('node-fin-api',null,'https://github.com/mrChernicharo/node-fin-api','2021-03-10T02:33:13Z','2021-03-10T05:24:27Z',null,'JavaScript'),
  ('node-sonic-search',null,'https://github.com/mrChernicharo/node-sonic-search','2021-03-04T00:05:22Z','2021-03-04T03:39:28Z',null,'JavaScript'),
  ('useMemo-test',null,'https://github.com/mrChernicharo/useMemo-test','2021-03-03T02:25:38Z','2021-03-03T03:59:54Z',null,'CSS'),
  ('react-ref',null,'https://github.com/mrChernicharo/react-ref','2021-03-02T19:04:43Z','2021-03-03T02:14:26Z',null,'CSS'),
  ('NLW-4',null, 'https://github.com/mrChernicharo/NLW-4', '2021-02-22T16:38:20Z', '2021-02-22T17:30:19Z', null, 'HTML'),
  ('framer-motion-pizzajoint',null,'https://github.com/mrChernicharo/framer-motion-pizzajoint','2021-02-18T14:18:58Z','2021-02-18T19:11:38Z',null,'JavaScript'),
  ('framer-motion-cool-hamburger-side-menu',null,'https://github.com/mrChernicharo/framer-motion-cool-hamburger-side-menu','2021-02-18T02:22:14Z','2021-02-18T02:35:36Z',null,'TypeScript'),
  ('framer-motion-side-menu',null,'https://github.com/mrChernicharo/framer-motion-side-menu','2021-02-18T01:51:43Z','2021-02-18T02:33:07Z',null,'TypeScript'),
  ('next-tailwind-framermotion-test',null,'https://github.com/mrChernicharo/next-tailwind-framermotion-test','2021-02-17T17:50:30Z','2021-02-17T19:55:42Z',null,'TypeScript'),
  ('next-beat3',null,'https://github.com/mrChernicharo/next-beat3','2021-02-14T13:54:17Z','2021-02-14T14:33:51Z',null,'CSS'),
  ('animation-context',null,'https://github.com/mrChernicharo/animation-context','2021-02-10T02:33:08Z','2021-02-10T19:32:02Z',null,'TypeScript'),
  ('next-beat-maker','real-beat-maker-r2nbesekk-mrchernicharo.vercel.app','https://github.com/mrChernicharo/next-beat-maker','2021-01-31T01:36:53Z','2021-02-02T06:23:56Z',null,'TypeScript'),
  ('curso-next',null,'https://github.com/mrChernicharo/curso-next','2021-01-25T14:42:46Z','2021-01-28T05:53:28Z',null,'TypeScript'),
  ('lacos2',null,'https://github.com/mrChernicharo/lacos2','2021-01-08T21:12:21Z','2021-01-24T04:50:44Z',null,'TypeScript'),
  ('app-lacos','https://applacos.web.app/',null,'2018-09-08T12:13:39Z','2021-12-02T04:50:44Z',null,'TypeScript'),
  ('directives-start',null,'https://github.com/mrChernicharo/directives-start','2020-07-20T16:55:16Z','2021-01-23T04:15:59Z',null,'TypeScript'),
  ('jokenpo-react-native',null,'https://github.com/mrChernicharo/jokenpo-react-native','2020-12-17T04:58:54Z','2020-12-17T05:03:06Z',null,'Java'),
  ('pca-2020',null,'https://github.com/mrChernicharo/pca-2020','2020-10-20T21:50:28Z','2020-11-28T20:48:21Z','Site sobre automóveis elétricos e sustentabilidade. Prática Curricular Articuladora - PCA  de Introdução às Aplicações Web. UNIGRANRIO 2020','HTML'),
  ('RxJS-tests',null,'https://github.com/mrChernicharo/RxJS-tests','2020-09-12T20:35:31Z','2020-11-24T12:47:23Z',null,'JavaScript'),
  ('lacos-2',null,'https://github.com/mrChernicharo/lacos-2','2020-11-20T01:11:57Z','2020-11-20T01:11:57Z',null,null),
  ('ap3-covid-quiz',null,'https://github.com/mrChernicharo/ap3-covid-quiz','2020-11-12T02:11:02Z','2020-11-14T12:14:48Z','Javascript quiz about COVID-19','JavaScript'),
  ('rxjs-angular-academy',null,'https://github.com/mrChernicharo/rxjs-angular-academy','2020-11-10T01:26:45Z','2020-11-10T01:48:25Z',null,'TypeScript'),
  ('angular-crud',null,'https://github.com/mrChernicharo/angular-crud','2020-06-19T15:43:02Z','2020-10-24T01:30:10Z',null,'TypeScript'),
  ('firebase-angular-university',null,'https://github.com/mrChernicharo/firebase-angular-university','2020-09-28T15:42:17Z','2020-10-06T00:35:37Z',null,'TypeScript'),
  ('rxjs',null,'https://github.com/mrChernicharo/rxjs','2020-10-03T04:52:40Z','2020-10-03T05:43:55Z',null,'JavaScript'),
  ('firecloud-app',null,'https://github.com/mrChernicharo/firecloud-app','2020-09-22T23:03:22Z','2020-09-22T23:11:00Z',null,'HTML'),
  ('b-flat-set',null,'https://github.com/mrChernicharo/b-flat-set','2020-08-15T00:23:08Z','2020-09-18T21:18:14Z',null,'TypeScript'),
  ('ng-finances',null,'https://github.com/mrChernicharo/ng-finances','2020-09-14T22:39:23Z','2020-09-14T22:43:23Z',null,'TypeScript'),
  ('e-songbook',null,'https://github.com/mrChernicharo/e-songbook','2020-09-14T22:01:27Z','2020-09-14T22:03:40Z',null,'TypeScript'),
  ('rxjs-ex',null,'https://github.com/mrChernicharo/rxjs-ex','2020-09-14T04:32:17Z','2020-09-14T04:36:16Z',null,null),
  ('git-user-app',null,'https://github.com/mrChernicharo/git-user-app','2020-04-04T02:11:51Z','2020-09-12T19:11:13Z','An app to search for users and list them onto the screen','JavaScript'),
  ('site-ppsw-unigranrio',null,'https://github.com/mrChernicharo/site-ppsw-unigranrio','2020-09-10T19:24:11Z','2020-09-10T21:53:50Z','Site desenvolvido para a avaliação na matéria de Prática de Programação em Sistemas Web. UNIGRANRIO','HTML'),
  ('echarts',null,'https://github.com/mrChernicharo/echarts','2020-08-21T16:37:44Z','2020-08-28T02:08:12Z','Echart tests','HTML'),
  ('ibge',null,'https://github.com/mrChernicharo/ibge','2020-08-22T19:13:21Z','2020-08-23T01:04:00Z','testes de interação com a API do IBGE','HTML'),
  ('portifolio',null,'https://github.com/mrChernicharo/portifolio','2020-05-21T03:06:48Z','2020-08-19T14:12:10Z','My personal developer portifolio','JavaScript'),
  ('iRecipe','https://i-recipe-b5b67.firebaseapp.com/auth','https://github.com/mrChernicharo/iRecipe','2020-07-17T00:50:57Z','2020-08-17T22:23:14Z','Angular app','TypeScript'),
  ('app-gobarber',null,'https://github.com/mrChernicharo/app-gobarber','2020-05-01T23:55:36Z','2020-08-13T16:14:04Z','React-Native app','TypeScript'),
  ('typeorm-DB-relations',null,'https://github.com/mrChernicharo/typeorm-DB-relations','2020-06-09T20:46:13Z','2020-08-12T15:27:17Z',null,'TypeScript'),
  ('routing-start',null,'https://github.com/mrChernicharo/routing-start','2020-07-21T22:35:13Z','2020-08-11T18:21:04Z','Angular Routing Studies','TypeScript'),
  ('angular-song-app',null,'https://github.com/mrChernicharo/angular-song-app','2020-08-06T19:43:44Z','2020-08-07T01:06:09Z',null,'TypeScript'),
  ('http-start',null,'https://github.com/mrChernicharo/http-start','2020-07-29T16:30:13Z','2020-07-30T02:46:20Z','Angular Http studies','TypeScript'),
  ('angular-course-assignments',null,'https://github.com/mrChernicharo/angular-course-assignments','2020-07-15T17:01:13Z','2020-07-29T16:21:44Z',null,'TypeScript'),
  ('pipes-start',null,'https://github.com/mrChernicharo/pipes-start','2020-07-29T04:48:05Z','2020-07-29T15:49:57Z','Angular Pipes','TypeScript'),
  ('reactive-forms',null,'https://github.com/mrChernicharo/reactive-forms','2020-07-28T02:56:03Z','2020-07-28T16:38:58Z','Angular reactive forms studies','TypeScript'),
  ('forms-td-start',null,'https://github.com/mrChernicharo/forms-td-start','2020-07-27T03:09:31Z','2020-07-27T21:52:51Z','Angular template driven forms','TypeScript'),
  ('observers-start',null,'https://github.com/mrChernicharo/observers-start','2020-07-26T22:37:53Z','2020-07-27T01:03:54Z','Angular observers studies','TypeScript'),
  ('services-start',null,'https://github.com/mrChernicharo/services-start','2020-07-20T21:32:43Z','2020-07-21T15:23:48Z',null,'TypeScript'),
  ('servers-app',null,'https://github.com/mrChernicharo/servers-app','2020-07-17T14:45:18Z','2020-07-18T03:35:55Z',null,'TypeScript'),
  ('my-first-app',null,'https://github.com/mrChernicharo/my-first-app','2020-07-15T02:41:01Z','2020-07-16T21:49:47Z','Angular test app','TypeScript'),
  ('desafio11-goRestaurant-web',null,'https://github.com/mrChernicharo/desafio11-goRestaurant-web','2020-07-01T20:14:40Z','2020-07-06T02:17:52Z',null,'TypeScript'),
  ('desafio-10-react-goRestaurant',null,'https://github.com/mrChernicharo/desafio-10-react-goRestaurant','2020-06-30T21:28:37Z','2020-07-01T20:09:48Z',null,'TypeScript'),
  ('JS-catch-the-fruit-game',null,'https://github.com/mrChernicharo/JS-catch-the-fruit-game','2020-06-29T22:24:19Z','2020-06-29T22:51:39Z',null,'JavaScript'),
  ('JS-Tetris',null,'https://github.com/mrChernicharo/JS-Tetris','2020-06-28T18:16:09Z','2020-06-29T03:14:14Z',null,'JavaScript'),
  ('todos-app',null,'https://github.com/mrChernicharo/todos-app','2020-06-26T16:30:40Z','2020-06-27T02:46:53Z','Angular test project','TypeScript'),
  ('gobarber-node',null,'https://github.com/mrChernicharo/gobarber-node','2020-04-20T19:43:40Z','2020-06-26T14:31:21Z','Backend do aplicativo Go Barber - projeto proposto pela Rocketseat no Bootcamp GoStack','TypeScript'),
  ('git-workflow-test',null,'https://github.com/mrChernicharo/git-workflow-test','2020-06-26T00:32:40Z','2020-06-26T04:49:16Z',null,null),
  ('netflix',null,'https://github.com/mrChernicharo/netflix','2020-06-22T01:11:04Z','2020-06-22T19:05:05Z','Angular studies','TypeScript'),
  ('_test',null,'https://github.com/mrChernicharo/_test','2020-06-20T13:47:10Z','2020-06-20T15:46:05Z',null,'Python'),
  ('pygame-pca',null,'https://github.com/mrChernicharo/pygame-pca','2020-04-26T02:41:34Z','2020-06-19T00:59:42Z','Desenvolvimento do game mosquito killer','Python'),
  ('lacos-backend-ts',null,'https://github.com/mrChernicharo/lacos-backend-ts','2020-06-13T22:25:35Z','2020-06-14T00:49:54Z',null,'TypeScript'),
  ('goMarketplace',null,'https://github.com/mrChernicharo/goMarketplace','2020-06-08T21:52:22Z','2020-06-09T00:04:00Z','React Native - Desafio 08 - bootcamp GoStack','TypeScript'),
  ('Ecoleta',null,'https://github.com/mrChernicharo/Ecoleta','2020-06-01T14:29:16Z','2020-06-08T03:16:32Z','Aplicação proposta na NLWeek da Rocketseat','TypeScript'),
  ('pyforca',null,'https://github.com/mrChernicharo/pyforca','2020-05-31T22:20:02Z','2020-06-02T04:24:50Z','Jogo de forca em Python','Python'),
  ('go-barber-frontend',null,'https://github.com/mrChernicharo/go-barber-frontend','2020-04-27T17:34:38Z','2020-05-31T01:54:56Z','Projeto de aplicação - Typescript | Node | React | React-Native','TypeScript'),
  ('estudos-react',null,'https://github.com/mrChernicharo/estudos-react','2020-05-25T03:10:29Z','2020-05-26T00:55:30Z',null,'JavaScript'),
  ('app-lista-tarefas',null,'https://github.com/mrChernicharo/app-lista-tarefas','2020-05-20T04:34:27Z','2020-05-20T17:05:32Z','app para criação, listagem, atualização e delete de tarefas','PHP'),
  ('car-rush',null,'https://github.com/mrChernicharo/car-rush','2020-03-30T21:00:36Z','2020-05-19T20:12:57Z','Python Pygame - game app','Python'),
  ('node-starter',null,'https://github.com/mrChernicharo/node-starter','2020-05-18T19:47:36Z','2020-05-18T23:34:04Z','Criação de API com nodeJS','JavaScript'),
  ('lacos-backend',null,'https://github.com/mrChernicharo/lacos-backend','2020-05-07T03:28:29Z','2020-05-08T16:13:38Z',null,'JavaScript'),
  ('go-finances-07',null,'https://github.com/mrChernicharo/go-finances-07','2020-05-06T17:12:16Z','2020-05-06T20:23:44Z',null,'TypeScript'),
  ('react-hooks',null,'https://github.com/mrChernicharo/react-hooks','2020-05-04T20:09:13Z','2020-05-04T23:33:01Z','Estudo sobre os hooks do ReactJS','JavaScript'),
  ('appointments-projeto-NodeJS',null,'https://github.com/mrChernicharo/appointments-projeto-NodeJS','2020-04-28T07:15:00Z','2020-04-28T16:59:37Z','Backend com NodeJS e Typescript','TypeScript'),
  ('flexbox-practice',null,'https://github.com/mrChernicharo/flexbox-practice','2020-04-24T03:14:55Z','2020-04-24T21:48:14Z',null,'CSS'),
  ('desafio07-react',null,'https://github.com/mrChernicharo/desafio07-react','2020-04-23T23:36:49Z','2020-04-23T23:36:54Z',null,'TypeScript'),
  ('projeto-react-typescript',null,'https://github.com/mrChernicharo/projeto-react-typescript','2020-04-23T15:32:26Z','2020-04-23T23:33:39Z','Aplicação para busca e exibição de repositórios do github','TypeScript'),
  ('Desafio06-backend',null,'https://github.com/mrChernicharo/Desafio06-backend','2020-04-21T19:35:26Z','2020-04-22T23:21:42Z','Desafio06 - App de transações financeiras com Typescript | TypeORM | Node | Postgres | Multer','TypeScript'),
  ('desafio05-node-transactions',null,'https://github.com/mrChernicharo/desafio05-node-transactions','2020-04-17T20:43:35Z','2020-04-18T04:10:40Z','aplicação para que deve armazenar transações financeiras de entrada e saída, permite o cadastro e a listagem dessas transações.','JavaScript'),
  ('desafio-react',null,'https://github.com/mrChernicharo/desafio-react','2020-04-09T20:43:52Z','2020-04-16T14:22:59Z','Desafio 3 do bootcamp goStack da rocketseat - Conceitos de ReactJS','JavaScript'),
  ('desafio05-projeto-node',null,'https://github.com/mrChernicharo/desafio05-projeto-node','2020-04-15T21:53:11Z','2020-04-15T21:53:17Z','Aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.','JavaScript'),
  ('-typescript-estudos',null,'https://github.com/mrChernicharo/-typescript-estudos','2020-04-14T04:33:55Z','2020-04-14T04:54:51Z','Estudos de Typescript seguindo as aulas do bootcamp GoStack da Rocketseat','Rich Text Format'),
  ('desafio-react-native',null,'https://github.com/mrChernicharo/desafio-react-native','2020-04-12T02:58:23Z','2020-04-13T07:32:11Z','mais um desafio da GoStack, agora com conceitos do React Native','JavaScript'),
  ('desafio01-node',null,'https://github.com/mrChernicharo/desafio01-node','2020-04-07T19:57:13Z','2020-04-08T01:43:35Z','Desafio Bootcamp GoStack => Conceitos de NodeJS','JavaScript'),
  ('ES6-gostack',null,'https://github.com/mrChernicharo/ES6-gostack','2020-04-02T19:34:02Z','2020-04-02T19:35:17Z',null,null),
  ('hello_world',null,'https://github.com/mrChernicharo/hello_world','2019-12-26T04:41:40Z','2020-04-01T19:41:52Z','exercising on github','HTML'),
  ('teste',null, 'https://github.com/mrChernicharo/teste', '2020-04-01T16:41:42Z', '2020-04-01T19:35:24Z', null, 'HTML'),
  ('javascript-ES6-studies',null,'https://github.com/mrChernicharo/javascript-ES6-studies','2020-03-31T22:56:25Z','2020-04-01T00:23:31Z',null,'JavaScript'),
  ('ReactJS-Node-Be-the-Hero',null,'https://github.com/mrChernicharo/ReactJS-Node-Be-the-Hero','2020-03-26T04:42:40Z','2020-03-26T05:03:16Z',null,'JavaScript'),
  ('be_the_hero',null,'https://github.com/mrChernicharo/be_the_hero','2020-03-25T17:10:30Z','2020-03-25T17:42:17Z','donnation app for NGOs to fund actions of solidarity and social work','JavaScript'),
  ('game1_atropelado',null,'https://github.com/mrChernicharo/game1_atropelado','2020-02-28T19:14:02Z','2020-02-28T19:20:03Z','Passo a passo da construção do meu game ''Atropelado''','Python');

select * from projects where length(site_url) > 0;
select * from projects where length(description) > 0;




-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  PROJECT_IMAGES  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

truncate project_images;

create table project_images (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  url varchar NOT NULL,
  project_id uuid NOT NULL,
  
  constraint fk_project_images_project_id foreign key (project_id) references projects(id) ON delete cascade
);

insert into project_images (url, project_id) values 
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-01.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-02.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-03.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-04.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-05.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-06.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-07.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/app-lacos-08.png', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-01.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-02.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-03.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-04.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-05.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/gordinho-defence-06.png', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/d3-charts-01.png', (select id from projects where name = 'd3-charts')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/d3-charts-02.png', (select id from projects where name = 'd3-charts')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/happy-plants-01.png', (select id from projects where name = 'happy-plants')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/mel-da-terra-verde-01.png', (select id from projects where name = 'app-mel-da-terra-verde')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/old-portfolio-01.png', (select id from projects where name = 'next-portfolio')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/old-portfolio-02.png', (select id from projects where name = 'next-portfolio')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/old-portfolio-03.png', (select id from projects where name = 'next-portfolio')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/old-portfolio-04.png', (select id from projects where name = 'next-portfolio')),
    ('https://string7devfiles.s3.amazonaws.com/projects/images/old-portfolio-05.png', (select id from projects where name = 'next-portfolio'));

select * from project_images;


-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  PROJECT_VIDEOS  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


truncate project_videos;

create table project_videos (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  url varchar NOT NULL,
  project_id uuid NOT NULL,
  
  constraint fk_project_videos_project_id foreign key (project_id) references projects(id) ON delete cascade
);
 

insert into project_videos (url, project_id) values 
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/d3-charts.mp4', (select id from projects where name = 'd3-charts')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/path-finder.mp4', (select id from projects where name = 'path-finder-app')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/ts-map.mp4', (select id from projects where name = 'ts-map')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/mel-mobile.mp4', (select id from projects where name = 'mel-da-terra-mobile')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/happy-plants.mp4', (select id from projects where name = 'happy-plants')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/app-lacos.mp4', (select id from projects where name = 'app-lacos')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/old-portfolio.mp4', (select id from projects where name = 'next-portfolio')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/enhanced-img.mp4', (select id from projects where name = 'enhanced-img')),
    ('https://string7devfiles.s3.amazonaws.com/projects/videos/mel-portfolio.mp4', (select id from projects where name ='app-mel-da-terra-verde'));

-- projects + video_url
select proj.*, videos.url as video_url 
from projects as proj
left join project_videos as videos 
on videos.project_id = proj.id;