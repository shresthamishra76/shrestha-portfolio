import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-fuchsia-700 text-black pt-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <p className="text-lg">
          Below are some of the skills I have developed over the years.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-32 text-center mt-20 mb-20 w-full max-w-7xl px-10">
        <div className="flex flex-col items-center">
          <img
            src="../images/python.png"
            alt="Python Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/java.png"
            alt="Java Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/react.png"
            alt="React Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/tf.png"
            alt="TensorFlow Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">TensorFlow</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/opencv.png"
            alt="OpenCV Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">OpenCV</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="../images/pytorch.png"
            alt="PyTorch Logo"
            className="w-32 h-32 object-contain"
          />
          <p className="mt-4 text-lg">PyTorch</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
