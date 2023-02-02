import { useContext } from "react";
import { useForm } from "react-hook-form";
import ErrorsMessage from "../../components/ErrorsMessage/ErrorsMessage";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ContactPage() {
    const { darkMode } = useContext(ThemeContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)
    }

    return <div>
        Soy contacto
        {darkMode ? "soy dark" : "soy light"}

        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="text" {...register("name", {required: true})} />
            </label>
            <span>
                <ErrorsMessage errors={errors} name="name"></ErrorsMessage>
            </span>
            <label>
                <input type="text" {...register("surname", {required: true, minLength: {value: 3, message: "3"} })} />
                <ErrorsMessage errors={errors} name="surname"></ErrorsMessage>
            </label>
            <label>
                <input type="number" {...register("age", {required: true, min: {value: 18, message: "18 años"}})} />
                <ErrorsMessage errors={errors} name="age"></ErrorsMessage>
            </label>

            <button>Enviar</button>
        </form>
    </div>
}