import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';

function App() {
    const {register, handleSubmit} = useForm()
    const axios = require('axios')

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("MeterReadingsFile", data.picture[0])

        axios({
            method:"post",
            url: "https://hqoqmnlh0k.execute-api.eu-west-2.amazonaws.com/Prod/meter-reading-uploads",
            data: formData
        }).then(function (response) {
            console.log(response);
            alert(response.data.toString())
        })
            .catch(function (response){
            console.log(response);
        });
    }

    return(
        <div className="App-header">
            <h1>
               Meter Reading Client
            </h1>
            <p>
                Please choose a meter reading csv file to upload
            </p>
            <div className="custom-file-upload">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required type="file" {...register("picture")} />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default App;
