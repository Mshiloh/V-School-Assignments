// import React from "react";

// function Blog(props) {
//     return (
//         <div>
//             <h3>{props.header}</h3>
//             <p>{props.paragraph}</p>
//         </div>
//     )
// };

// export default Blog;


import React from "react";

function Component(props) {
    console.log(props);
    const { title, subtitle, information, postClass } = props;
    return (
        <div className={postClass}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{information}</p>
        </div>
    )
}

export default Component;