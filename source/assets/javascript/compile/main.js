function calculateAspectRatio(width, height, desiredWidth = null, desiredHeight = null) {
    
    if (isNaN(width) || isNaN(height) || isNaN(desiredWidth) || isNaN(desiredHeight)) {
        return { status: 0, message: 'A valid number is required.'}
    }
    width = width;
    height = height;

    const aspectRatio = width / height;

    if (desiredWidth && desiredHeight) {
        return { status: 0, message: 'Introduce only one measure.' };
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
            if (result === null) {
                outputWrapper.innerHTML = '';
            } else {
                if (result.status == 0) {
                    outputWrapper.innerHTML = `${result.message}`;
                } else {
                    outputWrapper.innerHTML = `${result.width}x${result.height}`;
                }
            }
        });
    });
});
