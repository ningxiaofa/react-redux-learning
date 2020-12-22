import {useState} from "react";

export default function UseStateObj() {
    const [myStateObj, setMyStateObj] = useState(()=>({
        Name: "test",
        Contact: 111111111111,
        Email: "phoenix@seekasia.com",
        Job_title: "test email from phoenix",
        Salary_range: "1000 to 3000",
        Time: "2020-01-01",
      })
    );

    // setMyStateObj({...myStateObj, Name: "william"});
    console.log(myStateObj);

    return (
        <div>
            hello useStateObj!
            <input type="text" onChange={(e) => {
                setMyStateObj({...myStateObj, Name: e.currentTarget.value})
            }}/>
        </div>
    );
}