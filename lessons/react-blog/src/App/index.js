// import React from "react";
// import Blog from "./Blog";

// function App() {
//     return (
//         <div class="container">
//             <Blog header="Welome to my Blog ..." paragraph="Lorem ipsum ..."></Blog>
//         </div>
//     )
// };

// export default App;

import React from "react";
import Component from "./Component";

function App() {
    const blogPost1 = {
        title: "test",
        subtitle: "lorem ipsum",
        postClass: "blue"
    }
    

    return (
        <div>
            <Component {...blogPost1}></Component>
            <Component {...blogPost2}></Component>
            

        </div>
    )
}

export default App;