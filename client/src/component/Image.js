import React from 'react'
import { useForm } from "react-hook-form";

export default function Image() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("/api/createBanner", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
console.log(res);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("file")} />

                <input type="submit" />
            </form>
        </div>
    );
}
