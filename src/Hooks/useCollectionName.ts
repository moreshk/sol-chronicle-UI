import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface CollectionInformation {
  account: string;
  offChainMetadata: { metadata: { name: string } | null };
}

interface SpecificData {
  account: string;
  name: string | null;
}

const useCollectionName = (mintAccounts: string[]) => {
  const [testData, setTestData] = useState<CollectionInformation[]>([]);
  const generalData: SpecificData[] = [];

  console.log(testData);

  useEffect(() => {
    const getCollectionName = async () => {
      try {
        const { data } = await axios.get(
          `https://cryptic-anchorage-73113-c632759ca232.herokuapp.com/collection-name`,
          {
            params: {
              mintAccounts: mintAccounts,
            },
          }
        );

        setTestData(data);
      } catch (err) {
        console.error((err as AxiosError).message);
      }
    };
    if (mintAccounts.length > 1) {
      getCollectionName();
    }
  }, [mintAccounts]);

  testData.forEach((data) => {
    if (data.offChainMetadata.metadata === null) {
      generalData.push({
        account: data.account,
        name: 'No Collection Metadata =(',
      });
    } else {
      generalData.push({
        account: data.account,
        name: data.offChainMetadata.metadata.name,
      });
    }
  });

  return generalData;
};

export default useCollectionName;
