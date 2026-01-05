import React from "react";
import { useSearchParams } from 'next/navigation';
import { useTranslations } from '@/hooks/useTranslations';
import { Locale } from '@/lib/i18n';

const StoreSolution = ({ initialLocale = 'en' }) => {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');

    const locale: Locale =
        langParam === 'en' || langParam === 'vi'
            ? langParam
            : initialLocale;

    const { t } = useTranslations(locale);
    return (
        <section className="sec-store-cus">
            <div className="store-cus bg-pri ss-pd">
                <div className="container">
                    <div className="head-verti mb-32 center white">
                        <h1 className="title title-48 add-class text-verti is-inview">
                            {t("components.store-solu.title")}
                        </h1>
                    </div>
                    <div className="store-cus-row row">
                        <div className="store-cus-l col">
                            <div className="wrapper">
                                <div className="store-cus-it">
                                    <img src="/template/assets/images/sao.svg" alt="" />
                                    <p className="txt">
                                        {t("components.store-solu.item1")}
                                    </p>
                                </div>
                                <div className="store-cus-it">
                                    <img src="/template/assets/images/sao.svg" alt="" />
                                    <p className="txt">
                                        {t("components.store-solu.item2")}
                                    </p>
                                </div>
                                <div className="store-cus-it">
                                    <img src="/template/assets/images/sao.svg" alt="" />
                                    <p className="txt">
                                        {t("components.store-solu.item3")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="store-cus-r col">
                            <div className="wrapper">
                                <div className="img">
                                    <div className="img-inner">
                                        <img width="864" height="748" src="pallet.png" className="attachment-full size-full" alt="" decoding="async" loading="lazy" srcSet="pallet.png 864w, pallet-300x260.png 300w, pallet-768x665.png 768w" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreSolution;