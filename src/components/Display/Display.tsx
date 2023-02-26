type Valor = {

    valor: number;
}
export function Display(props: Valor) {

    return (
        <>
            <input type={"text"} maxLength={2} value={props.valor} className="w-full h-32 px-2 py-1 rounded-xl bg-zinc-500 text-white text-end font-semibold text-6xl transition focus:outline focus:ring-2 focus:ring-violet-500  focus:ring-offset-2 focus:ring-offset-background"></input>
        </>
    )

}