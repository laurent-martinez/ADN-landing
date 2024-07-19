import useFetchData from "@/pages/api/UseFetchData";


function AunctionTest() {
  const { data, error, loading } = useFetchData();

  if (loading) return <div>Chargement...</div>;
  
  // Vérifiez si data contient une erreur
  if (error || (data && data.error)) {
    return <div>Une erreur est survenue: {error?.message || data?.error}</div>;
  }
  
  if (!data || !Array.isArray(data)) return <div>Pas de données valides</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default AunctionTest;