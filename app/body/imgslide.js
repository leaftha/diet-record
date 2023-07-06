import { connectDB } from '@/util/database';

export default async function Imgslide({ session }) {
    const client = await connectDB;
    const db = client.db('menber');

    let fronts = await db
        .collection('front')
        .find({
            email: session.user.email,
        })
        .toArray();
    fronts = fronts.map((a) => {
        a._id = a._id.toString();
        return a;
    });

    let sides = await db
        .collection('side')
        .find({
            email: session.user.email,
        })
        .toArray();
    sides = sides.map((a) => {
        a._id = a._id.toString();
        return a;
    });
    return (
        <div>
            {fronts.map((image) => {
                return (
                    <div>
                        <img src={image.url} />
                        <span>{`${image.year} - ${image.month}`}</span>
                    </div>
                );
            })}
            {sides.map((image) => {
                return (
                    <div>
                        <img src={image.url} />
                        <span>{`${image.year} - ${image.month}`}</span>
                    </div>
                );
            })}
        </div>
    );
}
