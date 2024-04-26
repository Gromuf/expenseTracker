

const Filter = ({ selector }) => {


    return (
        <>
            <label className="label">Select filter</label>
            <div className="control">
                <div className="select">
                    <select >
                        <option >None</option>
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
export default Filter