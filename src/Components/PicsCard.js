import { Spin, Row, Col, Card } from "antd";

function PicsCard({ results, loading }) {
  if (loading) {
    return <Spin size="large" />;
  }

  if (!(results && results.length)) {
    return null;
  }

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {results.map((result) => (
        <Col key={result.id}>
          <Card
            cover={<img alt="cat" src={result.cover_photo.urls.small} />}
          ></Card>
        </Col>
      ))}
    </Row>
  );
}

export default PicsCard;
