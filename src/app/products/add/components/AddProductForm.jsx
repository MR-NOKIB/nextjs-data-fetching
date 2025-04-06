"use client"

export default function AddProductForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const payload = {
            productName,
        }
        const res = await fetch('http://localhost:3000/api/items',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const result = await res.json();
        console.log(result);
        form.reset();
        alert('Product Added')

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex justify-center mt-6 gap-3">
                <input type="text" name="productName" placeholder='Product Name' className="border px-3 py-1 rounded-lg" />
                <button type='submit' className="px-3 py-1 bg-slate-600 text-white rounded-lg">Submit</button>
            </form>
        </div>
    )
}
