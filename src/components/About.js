import React from 'react'

const About = () => { 
    return (
        <div><br/><br/>
            <div class="accordion" id="accordionExample" >
  <div class="accordion-item" style={{backgroundColor:"pink"}}>
    <h2 class="accordion-header" id="headingOne" >
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:"#ff3399" , fontSize:"20px" , fontStyle:""}}>
       myDiary
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>With myDiary</strong> you can conviniently create , delete and even edit your notes . You can also signup to myDiary and login to view only your notes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, explicabo deleniti minima pariatur ipsum cumque nam a distinctio qui nisi porro in incidunt harum esse hic facilis? Autem, nobis temporibus.
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{backgroundColor:"pink"}}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color:"#ff3399" , fontSize:"20px" , fontStyle:""}}>
        Developer's Info
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Nishant Puri</strong> <br></br> nishantpuri1331@gmail.com <br></br><a href='https://github.com/nishantpuri10' target="_blank">https://github.com/nishantpuri10</a>
      </div>
    </div>
  </div>
  
</div>
        </div>
    )
}

export default About
