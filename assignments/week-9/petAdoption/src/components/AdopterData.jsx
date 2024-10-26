/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
 
const AdopterData = ({ formData, handleGoBack }) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>petName</th>
                    <th>petType</th>
                    <th>breed</th>
                    <th>adopterName</th>
                    <th>Email</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
            // eslint-disable-next-line react/prop-types
            {formData.map((data, index) => (
                <tr key={index}>
                    <td>{data.petName}</td>
                    <td>{data.petType}</td>
                    <td>{data.breed}</td>
                    <td>{data.adopterName}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <button
        onClick={handleGoBack}
        style={{
            padding: "10px 20px", 
            boxSizing: "border-box",
            width: "auto", 
            display: "inline-block" 
        }}
    >
        Go Back
        </button>
    </div>
}

export default AdopterData