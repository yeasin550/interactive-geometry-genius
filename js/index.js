// blog page change
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = "q&a.html";
})

// counter for to do list
let serial = 0;

// ----------------------first card start----------------------

document.getElementById('btn-first').addEventListener('click', function(){
    serial = serial + 1;
    // triangle inputs
    const first = triangleInput('triangle-first-field', 'triangle-b')
    const second = triangleInput('triangle-second-field', 'triangle-h')
    if(isNaN(first) || first < 0 || isNaN(second) || second < 0 ){
        return alert('please enter a valid number')
    }
    // triangle title 
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const formuli = formula('triangle-formula');
    const totalTriangle =  formuli * second * first;
    container(triangleTitle ,totalTriangle)
    // document.getElementById('btn-first').setAttribute('disabled', true);

})

// ----------------------second card start----------------------

document.getElementById('btn-second').addEventListener('click', function(){
    serial = serial + 1;
    // rectangle inputs
    const rectangleFirst = triangleInput('rectangle-first-field', 'rectangle-w');
    const rectangleSecond = triangleInput('rectangle-second-field', 'rectangle-l');
    if(isNaN(rectangleFirst) || rectangleFirst < 0 || isNaN(rectangleSecond) || rectangleSecond < 0 ){
        return alert('please enter a valid number')
    }
    // rectangle title
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    const totalRectangle = rectangleFirst * rectangleSecond;
    container(rectangleTitle ,totalRectangle);
    // document.getElementById('btn-second').setAttribute('disabled', true);

})

// <<<<<<< third cards tart >>>>>>>>>>>>>>

document.getElementById('btn-third').addEventListener('click', function(){
    serial = serial + 1;
    // parallelogram inputs
    const parallelogramFirst = triangleInput('parallelogram-first-field', 'parallelogram-b');
    const parallelogramSecond = triangleInput('parallelogram-second-field', 'parallelogram-h');
    if(isNaN(parallelogramFirst) || parallelogramFirst < 0 || isNaN(parallelogramSecond) || parallelogramSecond < 0 ){
        return alert('please enter a valid number')
    }
      // parallelogram title
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const totalParallelogram = parallelogramFirst * parallelogramSecond;
    container(parallelogramTitle ,totalParallelogram);
    // document.getElementById('btn-third').setAttribute('disabled', true);
})

// <<<<<<<<<<<<<<<<<<<<<<< four card start>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('btn-four').addEventListener('click', function(){
    serial = serial + 1;
      // rhombus inputs
    const rhombusFirst = triangleInput('rhombus-first-field', 'rhombus-d1');
    const rhombusSecond = triangleInput('rhombus-second-field', 'rhombus-d2');
    if(isNaN(rhombusFirst) || rhombusFirst < 0 || isNaN(rhombusSecond) || rhombusSecond < 0 ){
        return alert('please enter a valid number')
    }
    // rhombus title
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    const formuli = formula('rhombus-formula');
    const totalRhombus = formuli * rhombusFirst * rhombusSecond;
    container(rhombusTitle ,totalRhombus);
    document.getElementById('btn-four').setAttribute('disabled', true);
})

// <<<<<<<<<<<<<<<<< five card start >>>>>>>>>>>>
document.getElementById('btn-five').addEventListener('click', function(){
    serial = serial + 1;
      // pentagon inputs
    const pentagonFirst = triangleInput('pentagon-first-field', 'pentagon-p');
    const pentagonSecond = triangleInput('pentagon-second-field', 'pentagon-b');
    if(isNaN(pentagonFirst) || pentagonFirst < 0 || isNaN(pentagonSecond) || pentagonSecond < 0 ){
        return alert('please enter a valid number')
    }
    // pentagon title
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    
    const formuli = formula('pentagon-formula');
    const totalPentagon = formuli * pentagonFirst * pentagonSecond;
    container(pentagonTitle ,totalPentagon);
    document.getElementById('btn-five').setAttribute('disabled', true);
})
// <<<<<<<<<<<<<<<<<< six card start>>>>>>>>>>>>>>>>>>>>>
document.getElementById('btn-six').addEventListener('click', function(){
   
    serial = serial + 1;
        // ellipse inputs
    const ellipseFirst = triangleInput('ellipse-first-field', 'ellipse-a');
    const ellipseSecond = triangleInput('ellipse-second-field', 'ellipse-b');
    if(isNaN(ellipseFirst) || ellipseFirst < 0 || isNaN(ellipseSecond) || ellipseSecond < 0 ){
        return alert('please enter a valid number')
    }
     // ellipse title
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const ellipseFormula = document.getElementById('ellipse-formula');
    const ellipseValue = ellipseFormula.innerText;
    const piValue =  ellipseValue.innerText = 3.14;
    ellipseFormula.innerText = piValue;
    const totalEllipse = piValue * ellipseFirst * ellipseSecond;
    container(ellipseTitle ,totalEllipse.toFixed(2) );
    document.getElementById('btn-six').setAttribute('disabled', true);

})

// color changer
// card:1
document.getElementById('card-first-bg').addEventListener('mouseenter', function(){
    colorChanger('card-first-bg')
})
// card:2
document.getElementById('card-second-bg').addEventListener('mouseenter', function(){
    colorChanger('card-second-bg')
})
// card:3
document.getElementById('card-third-bg').addEventListener('mouseenter', function(){
    colorChanger('card-third-bg')
})
// card:4
document.getElementById('card-four-bg').addEventListener('mouseenter', function(){
    colorChanger('card-four-bg')
})
// card:5
document.getElementById('card-five-bg').addEventListener('mouseenter', function(){
    colorChanger('card-five-bg')
})
// card:6
document.getElementById('card-six-bg').addEventListener('mouseenter', function(){
    colorChanger('card-six-bg')
})