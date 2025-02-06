export type TGrant = {
  id: number;
  direction: string;
  title: string;
  description: string;
  grantor: string;
  application_period: {
    start: string;
    end: string;
  };
  amount: string;
  requirements: string;
  due_date: string;
};

export type TGrants = TGrant[];
