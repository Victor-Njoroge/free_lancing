import React, { useState } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './Popular.css'
function Popular() {
    const images=[
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/ai-artists-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/logo-design-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161257/wordpress-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161253/voice-over-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161245/animated-explainer-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161249/social-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/27f914ed7984fdd2d55aa1fb5e74bd6a-1690384243592/seo-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161247/translation-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161248/data-entry-2x.png',
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/7ead3b2056987e6fa3aad69cf897a50b-1690383161238/book-covers-2x.png'
    ]

    const headings=[
        "Add talent to AI",
        "Build your brand",
        "Customize your site",
        "Share your Message",
        "Engage your audience",
        "Reach more customers",
        "Unlock growth online",
        "Go global",
        "Learn your business",
        "Showcase your story"
    ]

    const [fimage, setFimage]=useState(0)
    const imagesPerPage=5
    const nexImage=()=>{
        if(fimage + imagesPerPage < images.length){
            setFimage(fimage + imagesPerPage)
        }
    }
    const previous=()=>{
        if(fimage -imagesPerPage >=0){
            setFimage(fimage - imagesPerPage)
        }
    }
    const visibleImages=images.slice(fimage, fimage + imagesPerPage)
  return (
    <div>
        <h2 className="popular1">Popular Services</h2>
        <div className="images">
            {visibleImages.map((image, index) => (
                <div className="card" key={index}>
                    <img src={image} alt={index} />
                    <div className="heading">
                        <h4>{headings[fimage / imagesPerPage + index]}</h4>
                    </div>
                </div>
            ))}
        </div>
        
        <button onClick={previous} disabled={fimage === 0} className='left1'>
            <i className="fa fa-chevron-left"></i>
        </button>
        <button onClick={nexImage} disabled={fimage + imagesPerPage >= images.length} className='right1'>
            <i className="fa fa-chevron-right"></i>
        </button>
    </div>
  )
}

export default Popular