export default function Selector({ nom, selector, onChange, }) {

    const handleSelectChange = (e) => {
        onChange(e.target.value)
    }


    return (
        <>
            <label className="label">{nom}</label>
            <div className="control">
                <div className="select">
                    <select name={nom} onChange={handleSelectChange}>
                        <option value=''></option>
                        {selector.map((select, index) => {
                            return (
                                <option key={index} value={select}>{select}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}