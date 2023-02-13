interface ProductProps {
    params: {
        slug: string
    }
}

export default function Product ({ params }: ProductProps) {
    return (
    <h1>Product: {params.slug}</h1>
    )
}