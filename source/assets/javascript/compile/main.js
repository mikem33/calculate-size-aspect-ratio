function calculateAspectRatio(width, height, desiredWidth = null, desiredHeight = null) {
    
    if (isNaN(width) || isNaN(height) || isNaN(desiredWidth) || isNaN(desiredHeight)) {
        return { status: 0, message: 'A valid number is required.'}
    }
    
    if (!width || !height) {
        return { status: 0, message: 'Both original width and height are required.'}
    }

    const aspectRatio = width / height;


    if (desiredWidth && desiredHeight) {
        return { status: 0, message: 'Introduce only one measure. <br/><i>Width</i> or <i>height</i>.' };
    }
    
    if (desiredWidth !== null && desiredWidth !== '') {
        
        const calculatedHeight = desiredWidth / aspectRatio;
        return { status: 1, width: desiredWidth, height: Math.round(calculatedHeight) };
    }

    if (desiredHeight !== null && desiredHeight !== '') {
        
        const calculatedWidth = desiredHeight * aspectRatio;
        return { status: 1, width: Math.round(calculatedWidth), height: desiredHeight };
    }

    return null;
}

function hideOutput(element) {
    document.getElementById('loader').classList.remove('nondisplayed');
    console.log('hola');
    element.classList.add('nondisplayed');
    element.innerHTML = '';
}

function showOutput(element, result) {
    console.log('adios');
    document.getElementById('loader').classList.add('nondisplayed');
    element.classList.remove('nondisplayed');
    if (result.status == 1) {
        element.innerHTML = `${result.width} <span>x</span> ${result.height}`;
    } else {
        element.innerHTML = `${result.message}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach(input => {            
        input.addEventListener('keyup', () => {

            const params = [
                document.getElementById('width').value,
                document.getElementById('height').value,
                document.getElementById('new-width').value,
                document.getElementById('new-height').value
            ];

            const result = calculateAspectRatio(...params);

            const outputWrapper = document.getElementById('result');
            const messageWrapper = document.getElementById('message');
            if (result === null) {
                hideOutput(outputWrapper);
                hideOutput(messageWrapper);
            } else {
                if (result.status == 0) {
                    hideOutput(outputWrapper);
                    showOutput(messageWrapper, result);                    
                } else {
                    hideOutput(messageWrapper);
                    showOutput(outputWrapper, result);                    
                }
            }
        });
    });
});
