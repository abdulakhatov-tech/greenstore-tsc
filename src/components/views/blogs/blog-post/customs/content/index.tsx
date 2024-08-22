import CustomSkeleton from "@tools/skeleton";
import useBlogsServices from "@services/blogs";
import useOnlineStatus from "@hooks/useOnlineStatus";
import "./style.css";

const Content: React.FC = () => {
  const isOnline = useOnlineStatus();
  const { blogById } = useBlogsServices();
  const { isLoading, isError, data } = blogById;

  const loading = isLoading || isError || !isOnline;

  return (
    <div className='py-[25px] flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px]'>
      {loading ? (
        <CustomSkeleton type='input' active className='title-skeleton' />
      ) : (
        <h1 className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] font-bold text-black italic'>
          {data?.title}
        </h1>
      )}

      {loading ? (
        <div className='flex flex-col gap-8'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='flex flex-col gap-2' key={index}>
              {Array.from({ length: 5 }).map((_, subIndex) => (
                <CustomSkeleton
                  key={subIndex}
                  type='input'
                  active
                  className='description-skeleton'
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div
          className='italic text-black'
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      )}
    </div>
  );
};

export default Content;
