let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo-intro');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })
})

var sliding = document.getElementById('.slide-in');

$toggle.addEventListener('click', function() {
    var isOpen = $slider.classList.contains('slide-in');

    $slider.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');

    window.addEventListener('DOMContentLoaded', ()=>{

        setTimeout(()=>{
    
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });
    
            setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{
    
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50)
                });
            },2000);
    
            setTimeout(()=>{
                intro.style.top = '-100vh';
            }, 2300)
        })
    })
});