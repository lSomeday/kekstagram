(function () {
    const KEY_CODE = {
        ESC: 27,
    }
    const cancelBigPicture = document.querySelector('#picture-cancel');
    cancelBigPicture.addEventListener('click', () => {
        window.bigPicture.hideElement(window.bigPicture.bigPicture);
    });

    document.addEventListener('keydown', (event) => {
        if (event.keyCode == KEY_CODE.ESC) {
            window.bigPicture.hideElement(window.bigPicture.bigPicture);
            window.bigPicture.hideElement(editor);
            uploadFile.value = '';
        }
    });

    const cancelUploadFile = document.querySelector('#upload-cancel');
    cancelUploadFile.addEventListener('click', () => {
        window.bigPicture.hideElement(editor);
        uploadFile.value = '';
    });

    const uploadFile = document.querySelector('#upload-file');
    const editor = document.querySelector('.img-upload__overlay');
    uploadFile.addEventListener('change', () => {
        window.bigPicture.showElement(editor);
    });

    const imageUploadPreview = document.querySelector('.img-upload__preview');
    const buttonBigger = document.querySelector('.scale__control--bigger');
    const buttonSmaller = document.querySelector('.scale__control--smaller');

    const scaleValue = document.querySelector('.scale__control--value');
    let percent = 50;
    let currentScale = 1;

    const VALUES = {
        SCALE_STEP: 0.25,
        MAX_SCALE_VALUE: 1,
        MIN_SCALE_VALUE: 0.5,
        PERCENT_STEP: 25,
        MAX_PERCENT_VALUE: 100,
        MIN_PERCENT_VALUE: 25,
    };

    buttonBigger.addEventListener('click', () => {
        if (currentScale <= VALUES.MAX_SCALE_VALUE && percent != VALUES.MAX_PERCENT_VALUE) {
            currentScale += VALUES.SCALE_STEP;
            percent += VALUES.PERCENT_STEP;
            imageUploadPreview.style.transform = `scale(${currentScale})`;
            scaleValue.value = `${percent}%`;
        }
    });

    buttonSmaller.addEventListener('click', () => {
        if (currentScale > VALUES.MIN_SCALE_VALUE && percent != VALUES.MIN_PERCENT_VALUE) {
            currentScale -= VALUES.SCALE_STEP;
            percent -= VALUES.PERCENT_STEP;
            imageUploadPreview.style.transform = `scale(${currentScale})`;
            scaleValue.value = `${percent}%`;
        }
    });

    const effects = document.querySelector('.effects__list');
    effects.addEventListener('click', (event) => {
        if (event.target.tagName == 'SPAN') {
            imageUploadPreview.className = '';
            imageUploadPreview.classList.add('img-upload__preview');
            imageUploadPreview.classList.add(`${event.target.classList[1]}`);
        } else if (event.target.tagName == 'LABEL') {
            imageUploadPreview.className = '';
            imageUploadPreview.classList.add('img-upload__preview');
            imageUploadPreview.classList.add(`${event.target.querySelector('span').classList[1]}`);
        }
    });
})()