// HTML Variables
let content = document.querySelector(".content");

// Data Object
const data_obj = [
  {
    question: "Is there an official solution I can take a look at?",
    text: "We don't provide 'official' solutions for the challenges. This is because there is no single perfect way to complete a challenge. Instead, you're encouraged to review other people's code in the community. You can learn so much by seeing how other people have approached the same challenges and giving them feedback.",
  },
  {
    question: "Can I use these projects in my portfolio?",
    text: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    question: "How often are new challenges added?",
    text: "We launch a new challenge every two weeks. We alternate between free and premium challenge launches, so we launch one free and one premium challenge each month.",
  },
  {
    question:
      "What is the difference between the desktop-design, mobile-design, and desktop-preview images in my starter code?",
    text: "The desktop-design and mobile-design images show you how the layout should look at large and small screen sizes. The desktop design is 1440px wide, and the mobile design is 375px. However, try building projects to look good on all screen sizes. The desktop-preview image is a preview image used in the README file. You don’t need to reference this while building the project.",
  },
];

// Function to Create All Questions
const creatAllQuestions = () => {
content.innerHTML="";
if(data_obj.length>0){
  data_obj.forEach(item=>{
    const parentDiv=document.createElement("div");
    parentDiv.classList.add("text_content");
    parentDiv.innerHTML=`
           <h3>
            ${item.question}
            <img src="faq-accordion-main/assets/images/icon-plus.svg" alt="" class="plus-qeations"/>
          </h3>
          <p>
          ${item.text}
          </p>
    `
    content.appendChild(parentDiv);
    content.onclick=(e)=>{
      if(e.target.classList.contains("plus-qeations")){
        if(e.target.src.includes("icon-plus.svg")){
          e.target.src="faq-accordion-main/assets/images/icon-minus.svg"
        }else{
          e.target.src="faq-accordion-main/assets/images/icon-plus.svg"
        }
        const parag=e.target.parentElement.nextElementSibling;
        parag.classList.toggle("active")
      }
    }
  })
}
  }

creatAllQuestions();
