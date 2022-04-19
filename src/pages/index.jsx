import Layout from "../components/Layout";
import CanvasBox from "../components/Canvas/CanvasBox";
export default function Home() {
  return (
    <Layout title="Home">
      <p className="text-4xl mb-8">Welcome to Nextjs</p>
      <CanvasBox />
    </Layout>
  );
}
