import Picture from '../assets/imgs/picture.jpg';

function AboutMe() {
  return (
    <div className=" flex flex-col items-center p-8 max-w-4xl mx-auto">
      <img 
        src={Picture} 
        alt="Joseph Collins" 
        className="w-48 h-48 rounded-full object-cover mb-6"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-4">
          Hello! I am Joseph Collins, and I am a budding passionate full-stack developer with a focus on creating dynamic mobile-first user-friendly applications. With a background in accounting, I really like diving in to how things, and more so at times, why they dont work, and how it all ties together to provide developers and end-users with utility.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My journey in this field began during the Covid19 lockdown spending time in the Philippines, where I had to find something both creative and rewarding while we were all encouraged to stay at home. I am currently furthering my profiency in technologies such as React, Node.js, Express.js, and MongoDB, and I am always eager to explore new tools and frameworks. Collaborating with other developers and contributing to open-source projects has been an enriching experience, allowing me to grow both personally and professionally.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          When I am not coding, I enjoy engaging in activities that involve the outdoors, such as hiking the Coastal Cascades, exploring beaches, or camping with my bestfriend of 10 years, my beloved Siberian Husky. I am a strong believer in furthering yourself and understanding of this world, whether that be from immersing yourself in a new culture, or education. While I am 31, in a sense, I am just getting started! 
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
